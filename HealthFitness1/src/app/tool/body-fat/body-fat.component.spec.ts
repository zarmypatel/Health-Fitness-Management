import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFatComponent } from './body-fat.component';

describe('BodyFatComponent', () => {
  let component: BodyFatComponent;
  let fixture: ComponentFixture<BodyFatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyFatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyFatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
