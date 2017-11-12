import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstnameFieldComponent } from './firstname-field.component';

describe('FirstnameFieldComponent', () => {
  let component: FirstnameFieldComponent;
  let fixture: ComponentFixture<FirstnameFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstnameFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstnameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
