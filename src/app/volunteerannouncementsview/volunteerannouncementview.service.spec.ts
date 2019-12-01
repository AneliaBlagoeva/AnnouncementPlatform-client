import { TestBed } from '@angular/core/testing';

import { VolunteerAnnouncementViewService } from './volunteerannouncementview.service';

describe('VolunteerAnnouncementViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolunteerAnnouncementViewService = TestBed.get(VolunteerAnnouncementViewService);
    expect(service).toBeTruthy();
  });
});
