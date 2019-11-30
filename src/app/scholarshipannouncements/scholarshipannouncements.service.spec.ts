import { TestBed } from '@angular/core/testing';

import { ScholarshipAnnouncementService } from './scholarshipannouncements.service';

describe('ScholarshipAnnouncementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScholarshipAnnouncementService = TestBed.get(ScholarshipAnnouncementService);
    expect(service).toBeTruthy();
  });
});
