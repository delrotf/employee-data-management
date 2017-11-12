import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastnameFieldComponent } from './lastname-field.component';

describe('LastnameFieldComponent', () => {
  let component: LastnameFieldComponent;
  let fixture: ComponentFixture<LastnameFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastnameFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastnameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
