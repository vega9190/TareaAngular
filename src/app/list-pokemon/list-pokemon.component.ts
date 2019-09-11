import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../domain/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemones: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemones = this.pokemonService.get();
  }

}
