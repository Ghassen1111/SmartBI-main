import { TestBed } from '@angular/core/testing';

import { ResponsableFinancierService } from './responsable-financier.service';

describe('ResponsableFinancierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsableFinancierService = TestBed.get(ResponsableFinancierService);
    expect(service).toBeTruthy();
  });
});
