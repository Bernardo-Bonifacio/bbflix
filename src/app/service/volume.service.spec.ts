import { TestBed } from '@angular/core/testing';

import { VolumeService } from './volume.service';

describe('DadosService', () => {
  let service: VolumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
