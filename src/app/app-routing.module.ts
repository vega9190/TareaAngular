import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

const getDetallePokemon = 'detallePokemon/:name';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'listado', component: ListPokemonComponent },
  { path:  getDetallePokemon, component: DetailPokemonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
