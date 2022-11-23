import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepManagementComponent } from './sleep-management.component';

describe('SleepManagementComponent', () => {
  let component: SleepManagementComponent;
  let fixture: ComponentFixture<SleepManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
