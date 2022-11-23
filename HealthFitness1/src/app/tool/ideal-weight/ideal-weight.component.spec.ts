import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealWeightComponent } from './ideal-weight.component';

describe('IdealWeightComponent', () => {
  let component: IdealWeightComponent;
  let fixture: ComponentFixture<IdealWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdealWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdealWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
