// Projeto BBFLIX

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  catchError,
  debounceTime,
  filter,
  map,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { VolumesResultado } from 'src/app/models/interfaces';
import { VolumeService } from 'src/app/service/volume.service';

const PAUSA = 300;

@Component({
  selector: 'app-pesquisas',
  templateUrl: './pesquisas.component.html',
  styleUrls: ['./pesquisas.component.css'],
})
export class PesquisasComponent {
  ak = '676fc63217dc26dae038bae8ff1953e2';
  imgCorrompida: string =
    'http://image.tmdb.org./t/p/originalnull?api_key=' + this.ak;
  campoPesquisar = new FormControl();
  mensagemErro = '';
  volumesResultado!: VolumesResultado;

  constructor(private volumeService: VolumeService) {}

  totalDeVolumes$ = this.campoPesquisar.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 3),
    tap(() => console.log('Fluxo inicial')),
    switchMap((valorDigitado) =>
      this.volumeService.getPesquisarFilmes(valorDigitado)
    ),
    map((resultado) => (this.volumesResultado = resultado)),
    catchError((erro) => {
      console.log(erro);
      return of();
    })
  );

  volumesEncontrados$ = this.campoPesquisar.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 3),
    tap(() => console.log('Fluxo inicial')),
    switchMap((valorDigitado) =>
      this.volumeService.getPesquisarFilmes(valorDigitado)
    ),
    tap(() => console.log('Requisição')),
    map((resultado) => resultado ?? []),
    map((volume) => this.modificaDados(volume)),
    catchError((erro) => {
      console.log(erro);
      return throwError(
        () =>
          new Error(
            (this.mensagemErro =
              'Ops, ocorreu um erro. Recarregue a aplicação!')
          )
      );
    })
  );

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
}
