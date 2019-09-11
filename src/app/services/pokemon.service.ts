import { Injectable } from '@angular/core';
import { Pokemon } from '../domain/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  get(): Pokemon[] {
    return [
      {Id: 1, Nombre: 'Pikachu'},
      {Id: 2, Nombre: 'Eevee'},
      {Id: 3, Nombre: 'Magikarp'},
      {Id: 4, Nombre: 'Snorlax'},
    ];
  }
}
