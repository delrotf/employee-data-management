import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireDateFieldComponent } from './hire-date-field.component';

describe('HireDateFieldComponent', () => {
  let component: HireDateFieldComponent;
  let fixture: ComponentFixture<HireDateFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireDateFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireDateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
