import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetalle } from '../domain/pokemonDetalle';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  @Input() pokemonDetalle: PokemonDetalle;
  error: string = null;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService) { }

    ngOnInit() {
      const name = this.route.snapshot.paramMap.get('name');
      if (name) {
        this.pokemonService.getByName(name).subscribe(
          d => this.loadPokemonDetalle(d),
          e => this.handleError(e)
        );
      }
    }
  
    loadPokemonDetalle(pokemonDetalle: PokemonDetalle): void {
      this.pokemonDetalle = pokemonDetalle;
      this.error = null;
    }
  
    handleError(e: any) {
      this.error = e.message;
      this.pokemonDetalle = null;
    }
  
    back() {
      this.router.navigate(['/listado']);
    }

}
