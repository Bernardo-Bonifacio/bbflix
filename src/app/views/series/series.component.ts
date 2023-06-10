// Projeto BBFLIX

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VolumesResultado } from 'src/app/models/interfaces';
import { VolumeService } from 'src/app/service/volume.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  ak = '676fc63217dc26dae038bae8ff1953e2';
  imgCorrompida: string =
    'http://image.tmdb.org./t/p/originalnull?api_key=' + this.ak;
  subscription!: Subscription;
  seriesExibindoHoje!: VolumesResultado;
  seriesNoAr!: VolumesResultado;
  seriesPopulares!: VolumesResultado;
  seriesMaisVotadas!: VolumesResultado;
  seriesOriginais!: VolumesResultado;

  constructor(private volumeService: VolumeService) {}

  ngOnInit(): void {
    this.getSeriesExibindoHoje();
    this.getSeriesNoAr();
    this.getSeriesPopulares();
    this.getSeriesMaisVotadas();
    this.getSeriesOriginais();
  }

  getSeriesExibindoHoje() {
    this.volumeService.getSeriesExibindoHoje().subscribe({
      next: (volume) => (this.seriesExibindoHoje = this.modificaDados(volume)),
      error: (erro) => console.error(erro),
      complete: () => console.log('Observable completado'),
    });
  }

  getSeriesNoAr() {
    this.volumeService.getSeriesNoAr().subscribe({
      next: (volume) => (this.seriesNoAr = this.modificaDados(volume)),
      error: (erro) => console.error(erro),
      complete: () => console.log('Observable completado'),
    });
  }

  getSeriesPopulares() {
    this.volumeService.getSeriesPopulares().subscribe({
      next: (volume) => (this.seriesPopulares = this.modificaDados(volume)),
      error: (erro) => console.error(erro),
      complete: () => console.log('Observable completado'),
    });
  }

  getSeriesMaisVotadas() {
    this.volumeService.getSeriesMaisVotadas().subscribe({
      next: (volume) => (this.seriesMaisVotadas = this.modificaDados(volume)),
      error: (erro) => console.error(erro),
      complete: () => console.log('Observable completado'),
    });
  }

  getSeriesOriginais() {
    this.volumeService.getSeriesOriginais().subscribe({
      next: (volume) => (this.seriesOriginais = this.modificaDados(volume)),
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

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
