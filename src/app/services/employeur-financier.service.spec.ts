import { TestBed } from '@angular/core/testing';

import { EmployeurFinancierService } from './employeur-financier.service';

describe('EmployeurFinancierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeurFinancierService = TestBed.get(EmployeurFinancierService);
    expect(service).toBeTruthy();
  });
});
