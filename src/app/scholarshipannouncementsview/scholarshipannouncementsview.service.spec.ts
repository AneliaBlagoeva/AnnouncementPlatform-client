import { TestBed } from '@angular/core/testing';

import { ScholarshipAnnouncementViewService } from './scholarshipannouncementsview.service';

describe('ScholarshipAnnouncementsViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScholarshipAnnouncementViewService = TestBed.get(ScholarshipAnnouncementViewService);
    expect(service).toBeTruthy();
  });
});
