import { Injectable } from '@angular/core';
import { Pokemon } from '../domain/pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonDetalle } from '../domain/pokemonDetalle';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  urlBase = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { }
  cache: Pokemon[] = null;
  cant: number = 0;
  get(): Observable<Pokemon[]> {
    if (this.cache) {
      return of(this.cache);
    }

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };

    return this.http.get(this.urlBase, options).pipe(
      map(a => {
        const pokemones = toPokemones(a);
        this.cache = pokemones;
        return pokemones;
      })
    );
  }

  next(): Observable<Pokemon[]> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };
    this.cant = this.cant + 20;
    const url = this.urlBase + '?offset=' + this.cant + '&limit=20';

    return this.http.get(url, options).pipe(
      map(a => {
        const pokemones = toPokemones(a);
        return pokemones;
      })
    );
  }

  prev(): Observable<Pokemon[]> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };
    this.cant = this.cant - 20;
    const url = this.urlBase + '?offset=' + this.cant + '&limit=20';

    return this.http.get(url, options).pipe(
      map(a => {
        const pokemones = toPokemones(a);
        return pokemones;
      })
    );
  }

  getByName(name: string): Observable<PokemonDetalle> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };
    const url = this.urlBase + '/' + encodeURIComponent(name);

    return this.http.get(url, options).pipe(
      map(d => toPokemonDetalle(d))
    );
  }
}

function toPokemones(msg: any): Pokemon[] {
  return msg.results as Pokemon[];
}

function toPokemonDetalle(obj: any): PokemonDetalle {
  let s = obj as PokemonDetalle; 
  s.back_default = obj.sprites.back_default;
  s.front_default = obj.sprites.front_default;
  s.front_shiny = obj.sprites.front_shiny;
  s.back_shiny = obj.sprites.back_shiny;
  return s;
}
