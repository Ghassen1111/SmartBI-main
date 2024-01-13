import { TestBed } from '@angular/core/testing';

import { ResponsableCommercialService } from './responsable-commercial.service';

describe('ResponsableCommercialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsableCommercialService = TestBed.get(ResponsableCommercialService);
    expect(service).toBeTruthy();
  });
});
