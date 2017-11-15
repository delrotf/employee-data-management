import { Observable } from 'rxjs/Observable';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { City } from './city.model';
import { Component, OnInit, ViewEncapsulation, Input, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-city-field',
  templateUrl: './city-field.component.html',
  styleUrls: ['./city-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CityFieldComponent implements OnInit, OnChanges {
  @Input() cities: City[];

  filteredOptions: Observable<City[]>;

  myControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.cities === null || this.cities === undefined) {
      this.myControl.disable();
      this.myControl.reset();
    } else {
      this.myControl.enable();
    }
  }

  ngOnInit() {
    this.myControl.disable();

    this.filteredOptions = this.myControl.valueChanges
    .startWith(null)
    .map(city => city && typeof city === 'object' ? city.name : city)
    .map(name => name ? this.filter(name) : this.slice(this.cities));
}

  filter(name: string): City[] {
    if (this.cities !== null && this.cities !== undefined) {
      return this.cities.filter(option =>
        option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
  }

  slice(cities: City[]) {
    if (cities !== null && cities !== undefined) {
      return cities.slice();
    }
  }

  displayFn(city: City): any {
    return city ? city.name : city;
  }
}
