import { TestBed } from '@angular/core/testing';

import { AvailableVeicleService } from './available-veicle.service';

describe('AvailableVeicleService', () => {
  let service: AvailableVeicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableVeicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
