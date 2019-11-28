import { TestBed } from '@angular/core/testing';

import { JobAnnouncementService } from './jobannouncement.service';

describe('JobAnnouncementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobAnnouncementService = TestBed.get(JobAnnouncementService);
    expect(service).toBeTruthy();
  });
});
