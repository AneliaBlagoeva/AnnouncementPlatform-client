import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJobAnnouncementsComponent } from './myjobannouncements.component';

describe('MyJobAnnouncementsComponent', () => {
  let component: MyJobAnnouncementsComponent;
  let fixture: ComponentFixture<MyJobAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyJobAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJobAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
