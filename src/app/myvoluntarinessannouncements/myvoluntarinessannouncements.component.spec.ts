import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVoluntarinessAnnouncementsComponent } from './myvoluntarinessannouncements.component';

describe('MyVoluntarinessAnnouncementsComponent', () => {
  let component: MyVoluntarinessAnnouncementsComponent;
  let fixture: ComponentFixture<MyVoluntarinessAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVoluntarinessAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVoluntarinessAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
