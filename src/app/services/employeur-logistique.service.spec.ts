import { TestBed } from '@angular/core/testing';

import { EmployeurLogistiqueService } from './employeur-logistique.service';

describe('EmployeurLogistiqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeurLogistiqueService = TestBed.get(EmployeurLogistiqueService);
    expect(service).toBeTruthy();
  });
});
