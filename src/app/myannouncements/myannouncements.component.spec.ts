import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnnouncementsComponent } from './myannouncements.component';

describe('MyAnnouncementsComponent', () => {
  let component: MyAnnouncementsComponent;
  let fixture: ComponentFixture<MyAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
