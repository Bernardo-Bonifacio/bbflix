import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/interfaces/filme';
import { DadosService } from 'src/app/serviços/dados.service';

@Component({
  selector: 'app-filmes-destaque',
  templateUrl: './filmes-destaque.component.html',
  styleUrls: ['./filmes-destaque.component.css'],
})
export class FilmesDestaqueComponent implements OnInit {
  api_Key = '676fc63217dc26dae038bae8ff1953e2';

  filmesLancamento!: Filme;

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.getFilmesLancamento();
  }

  getFilmesLancamento() {
    this.dadosService.getFilmesLancamento().subscribe(
      (resposta) => {
        this.filmesLancamento = this.modificaDados(resposta);
        console.log(resposta)
      },
      (erro) => {
        console.log('Não encontrado', erro);
      }
    );
  }

  modificaDados(filme: Filme): Filme {
    if (filme.results) {
      filme.results.forEach((elemento) => {
        elemento.backdrop_path =
          'http://image.tmdb.org./t/p/original' +
          elemento.backdrop_path +
          '?api_key=' +
          this.api_Key;
        if (!elemento.title) {
          elemento.title = elemento?.name;
        }
      });
    }
    return filme;
  }

  // filmesRecente: any;

  // this.getFilmesRecente();

  // getFilmesRecente() {
  //   this.dadosService.getFilmesRecente().subscribe(
  //     (resposta) => {
  //       this.filmesRecente = this.mudarDados(resposta);
  //     },
  //     (erro) => {
  //       console.log('Não encontrado', erro);
  //     }
  //   );
  // }

  // mudarDados(resposta: any): any {
  //   if (!resposta.backdrop_path) {
  //     resposta.backdrop_path =
  //       'http://image.tmdb.org./t/p/original' +
  //       resposta.poster_path +
  //       '?api_key=' +
  //       this.api_Key;
  //   } else {
  //     resposta.backdrop_path =
  //       'http://image.tmdb.org./t/p/original' +
  //       resposta.backdrop_path +
  //       '?api_key=' +
  //       this.api_Key;
  //   }
  // }
}
