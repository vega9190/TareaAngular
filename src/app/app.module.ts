import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';
import { NombreUpperCasePipe } from './pipes/nombre-upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    PokemonComponent,
    DetailPokemonComponent,
    WelcomeComponent,
    PokemonDetalleComponent,
    NombreUpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
