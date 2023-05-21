import { VolumesResultado } from './../models/interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VolumeService {
  private readonly ak: string = '676fc63217dc26dae038bae8ff1953e2';
  private readonly idioma: string = '&language=pt-BR';
  private readonly url: string = 'https://api.themoviedb.org/3';
  private readonly urlPesquisa: string =
    'https://api.themoviedb.org/3/search/movie?api_key=676fc63217dc26dae038bae8ff1953e2';

  constructor(private http: HttpClient) {}

  // FILMES
  getFilmesPopulares(): Observable<VolumesResultado> {
    return this.http.get<VolumesResultado>(
      this.url + '/movie/popular?api_key=' + this.ak + this.idioma
    );
  }

  getFilmesEmCartaz(): Observable<VolumesResultado> {
    return this.http.get<VolumesResultado>(
      this.url + '/movie/now_playing?api_key=' + this.ak + this.idioma
    );
  }

  getFilmesMaisVotados(): Observable<VolumesResultado> {
    return this.http.get<VolumesResultado>(
      this.url + '/movie/top_rated?api_key=' + this.ak + this.idioma
    );
  }

  getFilmesLancamento(): Observable<VolumesResultado> {
    return this.http.get<VolumesResultado>(
      this.url + '/movie/upcoming?api_key=' + this.ak + this.idioma
    );
  }

  getFilmesTendencia(): Observable<VolumesResultado> {
    return this.http.get<VolumesResultado>(
      this.url + '/trending/all/week?api_key=' + this.ak + this.idioma
    );
  }

  // SERIES
  getSeriesExibindoHoje(): Observable<VolumesResultado> {
    return this.http.get<VolumesResultado>(
      this.url + '/tv/airing_today?api_key=' + this.ak + this.idioma
    );
  }

  getSeriesNoAr(): Observable<VolumesResultado> {
    return this.http.get<VolumesResultado>(
      this.url + '/tv/on_the_air?api_key=' + this.ak + this.idioma
    );
  }

  getSeriesPopulares(): Observable<VolumesResultado> {
    return this.http.get<VolumesResultado>(
      this.url + '/tv/popular?api_key=' + this.ak + this.idioma
    );
  }

  getSeriesMaisVotadas(): Observable<VolumesResultado> {
    return this.http.get<VolumesResultado>(
      this.url + '/tv/top_rated?api_key=' + this.ak + this.idioma
    );
  }

  getSeriesOriginais(): Observable<VolumesResultado> {
    return this.http.get<VolumesResultado>(
      this.url + '/discover/tv?api_key=' + this.ak + this.idioma
    );
  }

  // PESQUISAR
  getPesquisarFilmes(valorDigitado: string): Observable<VolumesResultado> {
    const params = new HttpParams().append('query', valorDigitado);
    return this.http.get<VolumesResultado>(this.urlPesquisa, { params })
  }

  // FORA DO AR
  // getFilmesRecente(): Observable<any> {
  //   return this.http.get<any>(
  //     this.url + '/movie/latest?api_key=' + this.api_Key
  //   );
  // }
}
