import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlenameFieldComponent } from './middlename-field.component';

describe('MiddlenameFieldComponent', () => {
  let component: MiddlenameFieldComponent;
  let fixture: ComponentFixture<MiddlenameFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddlenameFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlenameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
