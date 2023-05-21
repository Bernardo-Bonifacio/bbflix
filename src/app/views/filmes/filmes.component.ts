import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VolumesResultado } from 'src/app/models/interfaces';
import { VolumeService } from 'src/app/service/volume.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit, OnDestroy {
  ak = '676fc63217dc26dae038bae8ff1953e2';
  imgCorrompida: string = 'http://image.tmdb.org./t/p/originalnull?api_key=' + this.ak;
  subscription!: Subscription;
  filmesLancamento!: VolumesResultado;
  filmesPopulares!: VolumesResultado;
  filmesEmCartaz!: VolumesResultado;
  filmesMaisVotados!: VolumesResultado;
  filmesTendencia!: VolumesResultado;

  constructor(private volumeService: VolumeService) {}

  ngOnInit(): void {
    this.getFilmesLancamento();
    this.getFilmesPopulares();
    this.getFilmesEmCartaz();
    this.getFilmesMaisVotados();
    this.getFilmesTendencia();
  }

  getFilmesLancamento() {
    this.volumeService.getFilmesLancamento().subscribe({
      next: (volume) => (this.filmesLancamento = this.modificaDados(volume)),
      error: (erro) => console.error(erro),
      complete: () => console.log('Observable completado'),
    });
  }

  getFilmesPopulares() {
    this.volumeService.getFilmesPopulares().subscribe({
      next: (volume) => (this.filmesPopulares = this.modificaDados(volume)),
      error: (erro) => console.error(erro),
      complete: () => console.log('Observable completado'),
    });
  }

  getFilmesEmCartaz() {
    this.volumeService.getFilmesEmCartaz().subscribe({
      next: (volume) => (this.filmesEmCartaz = this.modificaDados(volume)),
      error: (erro) => console.error(erro),
      complete: () => console.log('Observable completado'),
    });
  }

  getFilmesMaisVotados() {
    this.volumeService.getFilmesMaisVotados().subscribe({
      next: (volume) => (this.filmesMaisVotados = this.modificaDados(volume)),
      error: (erro) => console.error(erro),
      complete: () => console.log('Observable completado'),
    });
  }

  getFilmesTendencia() {
    this.volumeService.getFilmesTendencia().subscribe({
      next: (volume) => (this.filmesTendencia = this.modificaDados(volume)),
      error: (erro) => console.error(erro),
      complete: () => console.log('Observable completado'),
    });
  }

  modificaDados(volume: VolumesResultado): VolumesResultado {
    if (volume.results) {
      volume.results.forEach((elemento) => {
        elemento.backdrop_path =
          'http://image.tmdb.org./t/p/original' +
          elemento.backdrop_path +
          '?api_key=' +
          this.ak;
        if (!elemento.title) {
          elemento.title = elemento?.name;
        }
      });
    }
    return volume;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // FORA DO AR

  // filmesRecente: any;

  // this.getFilmesRecente();

  // getFilmesRecente() {
  //   this.volumeService.getFilmesRecente().subscribe(
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
