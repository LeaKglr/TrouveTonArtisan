import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { ListeArtisansComponent } from './liste-artisans/liste-artisans.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { PageslegalesComponent } from './pageslegales/pageslegales.component';

const routes: Routes = [
  {path: "", component: AccueilComponent},
  {path: "FicheArtisan", component: FicheArtisanComponent},
  {path: "ListeArtisans", component: ListeArtisansComponent},
  {path: "mentionslegales", component: PageslegalesComponent},
  {path: "donneespersonnelles", component: PageslegalesComponent},
  {path: "accessibilite", component: PageslegalesComponent},
  {path: "cookies", component: PageslegalesComponent},
  // { path: "category/batiment", component: ListeArtisansComponent },
  // { path: "category/services", component: ListeArtisansComponent },
  // { path: "category/fabrication", component: ListeArtisansComponent },
  // { path: "category/alimentation", component: ListeArtisansComponent },

  { path: 'category/:category', component: ListeArtisansComponent },
  // { path: '', redirectTo: '/category/all', pathMatch: 'full' },
  // { path: '**', redirectTo: '/category/all' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
