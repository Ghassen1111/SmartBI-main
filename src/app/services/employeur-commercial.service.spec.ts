import { TestBed } from '@angular/core/testing';

import { EmployeurCommercialService } from './employeur-commercial.service';

describe('EmployeurCommercialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeurCommercialService = TestBed.get(EmployeurCommercialService);
    expect(service).toBeTruthy();
  });
});
