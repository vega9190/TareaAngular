import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetalle } from '../domain/pokemonDetalle';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.css'],
  animations: [
    trigger('shinyAnimationFront', [
      state('shinyFront', style({
        borderColor: '#CCCC00',
        transform: 'scale(1)'
      })),
      state('noShinyFront', style({
        borderColor: '#000000',
        transform: 'scale(1)'
      })),
      
      transition('shinyFront => noShinyFront', animate('500ms ease-in-out')),
      transition('noShinyFront => shinyFront', animate('500ms ease-in-out')),
    ]),
    trigger('shinyAnimationBack', [
      state('shinyBack', style({
        borderColor: '#CCCC00',
        transform: 'scale(1)'
      })),
      state('noShinyBack', style({
        borderColor: '#000000',
        transform: 'scale(1)'
      })),
      
      transition('shinyBack => noShinyBack', animate('500ms ease-in-out')),
      transition('noShinyBack => shinyBack', animate('500ms ease-in-out')),
    ])
  ]
})
export class PokemonDetalleComponent implements OnInit {
  @Input() pokemonDetalle: PokemonDetalle;

  esShiny: boolean = false;
  imagenFront: string = "";
  imagenBack: string = "";
  constructor() { 
  }

  ngOnInit() {
    this.imagenFront = this.pokemonDetalle.front_default;
    this.imagenBack = this.pokemonDetalle.back_default;
  }
  cambiarFront() {
    if(this.imagenFront.search("shiny") == -1){
      this.esShiny = true;
      this.imagenFront = this.pokemonDetalle.front_shiny;
    }else{
      this.esShiny = false;
      this.imagenFront = this.pokemonDetalle.front_default;
    }

  }
  cambiarBack() {
    if(this.imagenBack.search("shiny") == -1){
      this.esShiny = true;
      this.imagenBack = this.pokemonDetalle.back_shiny;
    }else{
      this.esShiny = false;
      this.imagenBack = this.pokemonDetalle.back_default;
    }

  }
  get stateFront(): string {
    if (this.esShiny === true) {
      return 'shinyFront';
    }else{
      return 'noShinyFront';
    }
  }
  get stateBack(): string {
    if (this.esShiny === true) {
      return 'shinyBack';
    }else{
      return 'noShinyBack';
    }
  }
}
