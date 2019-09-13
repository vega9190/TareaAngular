import { Injectable } from '@angular/core';
import { Pokemon } from '../domain/pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  urlBase = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { }

  get(): Observable<Pokemon[]> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };

    return this.http.get(this.urlBase, options).pipe(
      map(a => {
        const pokemones = toPokemones(a);
        return pokemones;
      })
    );
    //  return [
    //   {Id: 1, Nombre: 'Pikachu'},
    //   {Id: 2, Nombre: 'Eevee'},
    //   {Id: 3, Nombre: 'Magikarp'},
    //   {Id: 4, Nombre: 'Snorlax'},
    // ];
  }
}

function toPokemones(msg: any): Pokemon[] {
  return msg.results as Pokemon[];
}

function toPokemon(obj: any): Pokemon {
  return obj as Pokemon;
}
