import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTComponent } from './profile-t.component';

describe('ProfileTComponent', () => {
  let component: ProfileTComponent;
  let fixture: ComponentFixture<ProfileTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
