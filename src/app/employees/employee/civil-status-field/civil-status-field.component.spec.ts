import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilStatusFieldComponent } from './civil-status-field.component';

describe('CivilStatusFieldComponent', () => {
  let component: CivilStatusFieldComponent;
  let fixture: ComponentFixture<CivilStatusFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilStatusFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilStatusFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
