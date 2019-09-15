import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetalle } from '../domain/pokemonDetalle';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.css']
})
export class PokemonDetalleComponent implements OnInit {
  @Input() pokemonDetalle: PokemonDetalle;
  constructor() { }

  ngOnInit() {
  }

}
