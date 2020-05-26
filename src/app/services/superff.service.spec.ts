import { TestBed } from '@angular/core/testing';

import { SuperffService } from './superff.service';

describe('SuperffService', () => {
  let service: SuperffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
