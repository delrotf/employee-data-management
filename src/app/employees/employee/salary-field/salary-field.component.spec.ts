import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryFieldComponent } from './salary-field.component';

describe('SalaryFieldComponent', () => {
  let component: SalaryFieldComponent;
  let fixture: ComponentFixture<SalaryFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
