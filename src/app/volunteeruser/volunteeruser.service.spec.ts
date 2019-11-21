import { TestBed } from '@angular/core/testing';

import { VolunteerUserService } from './volunteeruser.service';

describe('VolunteerUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolunteerUserService = TestBed.get(VolunteerUserService);
    expect(service).toBeTruthy();
  });
});
