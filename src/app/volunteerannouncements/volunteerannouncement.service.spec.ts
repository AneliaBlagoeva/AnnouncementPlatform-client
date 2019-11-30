import { TestBed } from '@angular/core/testing';

import { VolunteerAnnouncementService } from './volunteerannouncement.service';

describe('VolunteerAnnouncementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolunteerAnnouncementService = TestBed.get(VolunteerAnnouncementService);
    expect(service).toBeTruthy();
  });
});
