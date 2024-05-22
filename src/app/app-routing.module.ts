import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { ListeArtisansComponent } from './liste-artisans/liste-artisans.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: "", component: AccueilComponent},
  {path: "FicheArtisan", component: FicheArtisanComponent},
  {path: "ListeArtisans", component: ListeArtisansComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
