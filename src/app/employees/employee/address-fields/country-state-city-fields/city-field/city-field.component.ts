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
    } else {
      this.myControl.enable();

      this.filteredOptions = this.myControl.valueChanges
      .startWith(null)
      .map(city => city && typeof city === 'object' ? city.name : city)
      .map(name => name ? this.filter(name) : this.cities.slice());
    }
  }

  ngOnInit() {
    this.myControl.disable();
  }

  filter(name: string): City[] {
    return this.cities.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(city: City): any {
    return city ? city.name : city;
  }
}
