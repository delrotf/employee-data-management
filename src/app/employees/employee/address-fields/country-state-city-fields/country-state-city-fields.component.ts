import { FormControl } from '@angular/forms';
import { City } from './city-field/city.model';
import { CityFieldComponent } from './city-field/city-field.component';
import { State } from './state-field/state.model';
import { Country } from './country-field/country.model';
import { Component, OnInit, ViewEncapsulation, Input, SimpleChanges } from '@angular/core';
import { STATES } from './state-field/states';
import { CITIES } from './city-field/cities';
import { COUNTRIES } from './country-field/countries';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-country-state-city-fields',
  templateUrl: './country-state-city-fields.component.html',
  styleUrls: ['./country-state-city-fields.component.css'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})
export class CountryStateCityFieldsComponent implements OnInit, OnChanges {
  @Input() countryControl: FormControl;
  @Input() stateControl: FormControl;
  @Input() cityControl: FormControl;
  country: string;
  state: State;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.countryControl) {
      this.country = this.countryControl.value;
    }
    if (this.stateControl) {
      this.state = this.stateControl.value;
    }
  }

  ngOnInit() {
//     const stateswithcities = {};
//     COUNTRIES2.forEach(country => {
//       const statesArray = STATES.filter(state => (<State>state).country_id === country.id);
//       const statestrim = [];
//       statesArray.forEach(state => {
//         statestrim.push({id: state.id, name: state.name});
//       });
//       stateswithcities[country.name] = statestrim;
//     });
// console.log(JSON.stringify(stateswithcities));

// const stateswithcities = {};
//         STATES.forEach(state => {
//           const citiesArray = CITIES.filter(city => (<City>city).state_id === state.id);
//           const statestrim = [];
//           citiesArray.forEach(city => {
//             statestrim.push(city.name);
//           });
//           stateswithcities[state.id] = statestrim;
//         });
//     console.log(JSON.stringify(stateswithcities));

    if (this.countryControl) {
      this.countryControl.valueChanges.subscribe(country => {
        if (country) {
          this.country = country;
        } else {
          this.country = null;
        }
      });
    }

    if (this.stateControl) {
      this.stateControl.valueChanges.subscribe(state => {
        if (state) {
            this.state = state;
        } else {
          this.state = null;
        }
      });
    }
  }
}
