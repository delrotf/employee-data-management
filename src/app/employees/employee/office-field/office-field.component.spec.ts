import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeFieldComponent } from './office-field.component';

describe('OfficeFieldComponent', () => {
  let component: OfficeFieldComponent;
  let fixture: ComponentFixture<OfficeFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
