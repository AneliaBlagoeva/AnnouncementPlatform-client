import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageauthuserComponent } from './homepageauthuser.component';

describe('HomepageauthuserComponent', () => {
  let component: HomepageauthuserComponent;
  let fixture: ComponentFixture<HomepageauthuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageauthuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageauthuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
