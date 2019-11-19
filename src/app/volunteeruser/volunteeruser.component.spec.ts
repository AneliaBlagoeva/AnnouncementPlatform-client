import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerUserComponent } from './volunteeruser.component';

describe('VolunteeruserComponent', () => {
  let component: VolunteerUserComponent;
  let fixture: ComponentFixture<VolunteerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
