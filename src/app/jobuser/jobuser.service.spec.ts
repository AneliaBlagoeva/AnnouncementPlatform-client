import { TestBed } from '@angular/core/testing';

import { JobUserService } from './jobuser.service';

describe('JobUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobUserService = TestBed.get(JobUserService);
    expect(service).toBeTruthy();
  });
});
