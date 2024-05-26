;
import { ListeArtisansComponent } from './liste-artisans/liste-artisans.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { PageslegalesComponent } from './pageslegales/pageslegales.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FooterComponent,
    HeaderComponent, 
    FicheArtisanComponent, 
    ListeArtisansComponent, 
    ErrorComponent, PageslegalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
