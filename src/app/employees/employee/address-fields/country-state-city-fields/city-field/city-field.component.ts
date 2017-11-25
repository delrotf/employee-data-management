import { Observable } from 'rxjs/Observable';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { City } from './city.model';
import { Component, OnInit, ViewEncapsulation, Input, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { CITIES } from './cities';
import { State } from '../state-field/state.model';

@Component({
  selector: 'app-city-field',
  templateUrl: './city-field.component.html',
  styleUrls: ['./city-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CityFieldComponent implements OnInit, OnChanges {

  @Input() cityControl: FormControl;
  @Input() state: State;
  @Input() cities: string[];

  filteredOptions: Observable<string[]>;

  constructor() {
    this.cityControl = new FormControl('', [Validators.required]); // when stand alone.
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cities = null;

    if (this.state) {
      this.cityControl.enable();
      console.log('this.state ' + JSON.stringify(this.state));
      if (this.state.id) {
        this.cities = CITIES[this.state.id];
      }
    } else {
      this.cityControl.reset();
      this.cityControl.disable();
    }
    console.log('City onChanges ' + JSON.stringify(this.cities));

    this.cityControl.updateValueAndValidity();

    this.filteredOptions = this.cityControl.valueChanges
      .startWith('')
      .map(val => {
        console.log('val ' + val);
        return this.filter(val);
      });
  }

  ngOnInit() {
  }

  filter(val: string): string[] {
    console.log('filter this.cities ' + JSON.stringify(this.cities));
    if (this.cities) {
      if (val) {
      return this.cities.filter(option =>
        option.toLowerCase().indexOf(val ? val.toLowerCase() : null) === 0);
      } else {
        return this.cities;
      }
    }
  }
}
