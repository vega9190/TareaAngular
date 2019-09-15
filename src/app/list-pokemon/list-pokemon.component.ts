import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../domain/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemones: Pokemon[] = [];
  error: string = null;
  private sub: Subscription;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.sub = this.pokemonService.get().subscribe(
      data => { this.loadData(data); },
      error => { this.handleError(error); }
    );
  }

  next(){
    this.sub = this.pokemonService.next().subscribe(
      data => { this.loadData(data); },
      error => { this.handleError(error); }
    );
  }
  prev(){
    this.sub = this.pokemonService.prev().subscribe(
      data => { this.loadData(data); },
      error => { this.handleError(error); }
    );
  }
  loadData(data: Pokemon[]): void {
    this.error = null;
    this.pokemones = data;
  }
  handleError(error: any): void {
    this.error = error.message;
    this.pokemones = [];
  }

}
