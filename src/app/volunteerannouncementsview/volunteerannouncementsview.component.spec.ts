import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerAnnouncementViewComponent } from './volunteerannouncementsview.component';

describe('VolunteerAnnouncementViewComponent', () => {
  let component: VolunteerAnnouncementViewComponent;
  let fixture: ComponentFixture<VolunteerAnnouncementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerAnnouncementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerAnnouncementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
