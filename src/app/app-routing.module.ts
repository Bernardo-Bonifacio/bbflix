import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmesComponent } from './views/filmes/filmes.component';
import { SeriesComponent } from './views/series/series.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PesquisasComponent } from './views/pesquisas/pesquisas.component';

const routes: Routes = [
  { path: '', redirectTo: 'filmes', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'pesquisas', component: PesquisasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
