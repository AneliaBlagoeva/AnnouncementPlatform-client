import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsViewComponent } from './announcementsview.component';

describe('AnnouncementsViewComponent', () => {
  let component: AnnouncementsViewComponent;
  let fixture: ComponentFixture<AnnouncementsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
