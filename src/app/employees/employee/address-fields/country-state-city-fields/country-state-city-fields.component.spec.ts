import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStateCityFieldsComponent } from './country-state-city-fields.component';

describe('CountryStateCityFieldsComponent', () => {
  let component: CountryStateCityFieldsComponent;
  let fixture: ComponentFixture<CountryStateCityFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryStateCityFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryStateCityFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
