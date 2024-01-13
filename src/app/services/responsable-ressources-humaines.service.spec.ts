import { TestBed } from '@angular/core/testing';

import { ResponsableRessourcesHumainesService } from './responsable-ressources-humaines.service';

describe('ResponsableRessourcesHumainesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsableRessourcesHumainesService = TestBed.get(ResponsableRessourcesHumainesService);
    expect(service).toBeTruthy();
  });
});
