import { FormControl } from '@angular/forms';
import { City } from './city-field/city.model';
import { CityService } from './../../../shared/city.service';
import { CityFieldComponent } from './city-field/city-field.component';
import { State } from './state-field/state.model';
import { StateService } from './../../../shared/state.service';
import { Country } from './country-field/country.model';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-country-state-city-fields',
  templateUrl: './country-state-city-fields.component.html',
  styleUrls: ['./country-state-city-fields.component.css'],
  providers: [StateService, CityService],
  encapsulation: ViewEncapsulation.None
})
export class CountryStateCityFieldsComponent implements OnInit {
  @Input() countryControl: FormControl;
  @Input() stateControl: FormControl;
  @Input() cityControl: FormControl;

  statesDb: State[];
  states: State[];

  citiesDb: City[];
  cities: City[];

  constructor(private stateService: StateService, private cityService: CityService) { }

  ngOnInit() {
    this.statesDb = this.stateService.getStates();
    this.citiesDb = this.cityService.getCities();
  }

  public receiveSelectedCountry(country: Country): void {
    if (country != null) {
      this.states = this.statesDb.filter(state => (<State>state).country_id === country.id);
      if (this.states === null || this.states.length === 0) {
        // this.states = null;
        this.states = [
          {
            id: 'N/A',
            name: 'N/A',
            country_id: country.id
          }
        ];
      }

      this.cities = null;
    } else {
      this.states = null;
      this.cities = null;
    }
  }

  public receiveSelectedState(state: State): void {
    if (state != null) {
      this.cities = this.citiesDb.filter(city => (<City>city).state_id === state.id);
      if (this.cities === null || this.cities.length === 0) {
        // this.cities = null;
        this.cities = [
          {
            id: 'N/A',
            name: 'N/A',
            state_id: state.id
          }
        ];
      }
    } else {
      this.cities = null;
    }
  }
}
