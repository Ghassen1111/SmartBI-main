import { TestBed } from '@angular/core/testing';

import { ResponsableLogistiqueService } from './responsable-logistique.service';

describe('ResponsableLogistiqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsableLogistiqueService = TestBed.get(ResponsableLogistiqueService);
    expect(service).toBeTruthy();
  });
});
