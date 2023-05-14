import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesDestaqueComponent } from './filmes-destaque.component';

describe('FilmesDestaqueComponent', () => {
  let component: FilmesDestaqueComponent;
  let fixture: ComponentFixture<FilmesDestaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmesDestaqueComponent],
    });
    fixture = TestBed.createComponent(FilmesDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
