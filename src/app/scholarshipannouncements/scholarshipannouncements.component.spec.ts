import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipAnnouncementComponent } from './scholarshipannouncements.component';

describe('ScholarshipannouncementsComponent', () => {
  let component: ScholarshipAnnouncementComponent;
  let fixture: ComponentFixture<ScholarshipAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
