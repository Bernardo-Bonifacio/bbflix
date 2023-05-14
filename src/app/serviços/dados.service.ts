import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../interfaces/filme';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  api_Key: string = '676fc63217dc26dae038bae8ff1953e2';
  idioma: string = '&language=pt-BR';
  url: string = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}

  // getFilmesRecente(): Observable<any> {
  //   return this.http.get<any>(
  //     this.url + '/movie/latest?api_key=' + this.api_Key
  //   );
  // }

  getFilmesPopulares(): Observable<Filme> {
    return this.http.get<Filme>(
      this.url + '/movie/popular?api_key=' + this.api_Key + this.idioma
    );
  }

  getFilmesEmCartaz(): Observable<Filme> {
    return this.http.get<Filme>(
      this.url + '/movie/now_playing?api_key=' + this.api_Key + this.idioma
    );
  }

  getFilmesMaisVotados(): Observable<Filme> {
    return this.http.get<Filme>(
      this.url + '/movie/top_rated?api_key=' + this.api_Key + this.idioma
    );
  }

  getFilmesLancamento(): Observable<Filme> {
    return this.http.get<Filme>(
      this.url + '/movie/upcoming?api_key=' + this.api_Key + this.idioma
    );
  }

  getFilmesTendencia(): Observable<Filme> {
    return this.http.get<Filme>(
      this.url + '/trending/all/week?api_key=' + this.api_Key + this.idioma
    );
  }

  getFilmesOriginal(): Observable<Filme> {
    return this.http.get<Filme>(
      this.url + '/discover/tv?api_key=' + this.api_Key + this.idioma
    );
  }
}
