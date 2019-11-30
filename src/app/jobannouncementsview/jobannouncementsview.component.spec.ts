import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAnnouncementsViewComponent } from './jobannouncementsview.component';

describe('JobAnnouncementsViewComponent', () => {
  let component: JobAnnouncementsViewComponent;
  let fixture: ComponentFixture<JobAnnouncementsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAnnouncementsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAnnouncementsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
