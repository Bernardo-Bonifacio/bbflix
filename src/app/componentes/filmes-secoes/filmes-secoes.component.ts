import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/interfaces/filme';
import { DadosService } from 'src/app/serviços/dados.service';

@Component({
  selector: 'app-filmes-secoes',
  templateUrl: './filmes-secoes.component.html',
  styleUrls: ['./filmes-secoes.component.css'],
})
export class FilmesSecoesComponent implements OnInit {
  api_Key = '676fc63217dc26dae038bae8ff1953e2';

  filmesPopulares!: Filme;
  filmesEmCartaz!: Filme;
  filmesMaisVotados!: Filme;
  filmesLancamento!: Filme;
  filmesTendencia!: Filme;
  filmesOriginal!: Filme;

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.getFilmesPopulares();
    this.getFilmesEmCartaz();
    this.getFilmesMaisVotados();
    this.getFilmesLancamento();
    this.getFilmesTendencia();
    this.getFilmesOriginal();
  }

  getFilmesPopulares() {
    this.dadosService.getFilmesPopulares().subscribe(
      (resposta) => {
        this.filmesPopulares = this.modificaDados(resposta);
      },
      (erro) => {
        console.log('Não encontrado', erro);
      }
    );
  }

  getFilmesEmCartaz() {
    this.dadosService.getFilmesEmCartaz().subscribe(
      (resposta) => {
        this.filmesEmCartaz = this.modificaDados(resposta);
      },
      (erro) => {
        console.log('Não encontrado', erro);
      }
    );
  }

  getFilmesMaisVotados() {
    this.dadosService.getFilmesMaisVotados().subscribe(
      (resposta) => {
        this.filmesMaisVotados = this.modificaDados(resposta);
      },
      (erro) => {
        console.log('Não encontrado', erro);
      }
    );
  }

  getFilmesLancamento() {
    this.dadosService.getFilmesLancamento().subscribe(
      (resposta) => {
        this.filmesLancamento = this.modificaDados(resposta);
      },
      (erro) => {
        console.log('Não encontrado', erro);
      }
    );
  }

  getFilmesTendencia() {
    this.dadosService.getFilmesTendencia().subscribe(
      (resposta) => {
        this.filmesTendencia = this.modificaDados(resposta);
      },
      (erro) => {
        console.log('Não encontrado', erro);
      }
    );
  }

  getFilmesOriginal() {
    this.dadosService.getFilmesOriginal().subscribe(
      (resposta) => {
        this.filmesOriginal = this.modificaDados(resposta);
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
}
