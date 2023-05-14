import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesSecoesComponent } from './filmes-secoes.component';

describe('FilmesSecoesComponent', () => {
  let component: FilmesSecoesComponent;
  let fixture: ComponentFixture<FilmesSecoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmesSecoesComponent],
    });
    fixture = TestBed.createComponent(FilmesSecoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
