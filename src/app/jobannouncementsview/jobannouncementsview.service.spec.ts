import { TestBed } from '@angular/core/testing';

import { JobAnnouncementViewService } from './jobannouncementsview.service';

describe('JobAnnouncementViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobAnnouncementViewService = TestBed.get(JobAnnouncementViewService);
    expect(service).toBeTruthy();
  });
});
