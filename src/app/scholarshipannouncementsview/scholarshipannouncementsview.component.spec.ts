import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipAnnouncementViewComponent } from './scholarshipannouncementsview.component';

describe('ScholarshipannouncementsComponent', () => {
  let component: ScholarshipAnnouncementViewComponent;
  let fixture: ComponentFixture<ScholarshipAnnouncementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipAnnouncementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipAnnouncementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
