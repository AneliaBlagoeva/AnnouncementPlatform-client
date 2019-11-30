import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerAnnouncementComponent } from './volunteerannouncements.component';

describe('VolunteerAnnouncementComponent', () => {
  let component: VolunteerAnnouncementComponent;
  let fixture: ComponentFixture<VolunteerAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
