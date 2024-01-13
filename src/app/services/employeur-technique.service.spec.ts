import { TestBed } from '@angular/core/testing';

import { EmployeurTechniqueService } from './employeur-technique.service';

describe('EmployeurTechniqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeurTechniqueService = TestBed.get(EmployeurTechniqueService);
    expect(service).toBeTruthy();
  });
});
