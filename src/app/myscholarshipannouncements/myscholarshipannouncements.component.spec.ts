import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScholarshipAnnouncementsComponent } from './myscholarshipannouncements.component';

describe('MyScholarshipAnnouncementsComponent', () => {
  let component: MyScholarshipAnnouncementsComponent;
  let fixture: ComponentFixture<MyScholarshipAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyScholarshipAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyScholarshipAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
