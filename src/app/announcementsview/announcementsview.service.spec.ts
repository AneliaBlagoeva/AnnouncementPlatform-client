import { TestBed } from '@angular/core/testing';

import { AnnouncementsViewService } from './announcementsview.service';

describe('AnnouncementsViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnouncementsViewService = TestBed.get(AnnouncementsViewService);
    expect(service).toBeTruthy();
  });
});
