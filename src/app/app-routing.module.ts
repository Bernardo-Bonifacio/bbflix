import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { FilmesDestaqueComponent } from './componentes/filmes-destaque/filmes-destaque.component';
import { FilmesSecoesComponent } from './componentes/filmes-secoes/filmes-secoes.component';
import { FooterComponent } from './componentes/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'filmes-destaque', component: FilmesDestaqueComponent },
  { path: 'filmes-secao', component: FilmesSecoesComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
