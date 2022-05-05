import { TestBed } from '@angular/core/testing';

import { OffertaServiceService } from './offerta-service.service';

describe('OffertaServiceService', () => {
  let service: OffertaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffertaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
