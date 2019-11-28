import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAnnouncementsComponent } from './jobannouncements.component';

describe('JobAnnouncementsComponent', () => {
  let component: JobAnnouncementsComponent;
  let fixture: ComponentFixture<JobAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
