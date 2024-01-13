import { TestBed } from '@angular/core/testing';

import { ClinetService } from './clinet.service';

describe('ClinetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClinetService = TestBed.get(ClinetService);
    expect(service).toBeTruthy();
  });
});
