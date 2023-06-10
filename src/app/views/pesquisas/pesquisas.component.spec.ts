// Projeto BBFLIX

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisasComponent } from './pesquisas.component';

describe('PesquisasComponent', () => {
  let component: PesquisasComponent;
  let fixture: ComponentFixture<PesquisasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisasComponent],
    });
    fixture = TestBed.createComponent(PesquisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
