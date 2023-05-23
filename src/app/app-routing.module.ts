import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesComponent } from './views/filmes/filmes.component';
import { SeriesComponent } from './views/series/series.component';
import { PesquisasComponent } from './views/pesquisas/pesquisas.component';

const routes: Routes = [
  { path: 'filmes', title: 'BBFLIX - Filmes', component: FilmesComponent },
  { path: 'series', title: 'BBFLIX - Séries', component: SeriesComponent },
  { path: 'pesquisas', title: 'BBFLIX - Filmes', component: PesquisasComponent },
  { path: '', redirectTo: 'filmes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
