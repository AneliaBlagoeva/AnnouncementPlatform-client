import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobUserComponent } from './jobuser.component';

describe('JobUserComponent', () => {
  let component: JobUserComponent;
  let fixture: ComponentFixture<JobUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
