import { TestBed } from '@angular/core/testing';

import { StudentUserService } from './studentuser.service';

describe('StudentuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentUserService = TestBed.get(StudentUserService);
    expect(service).toBeTruthy();
  });
});
