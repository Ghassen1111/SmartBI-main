import { TestBed } from '@angular/core/testing';

import { ResponsableTechniqueService } from './responsable-technique.service';

describe('ResponsableTechniqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsableTechniqueService = TestBed.get(ResponsableTechniqueService);
    expect(service).toBeTruthy();
  });
});
