import { Country } from './country.model';
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-country-field',
  templateUrl: './country-field.component.html',
  styleUrls: ['./country-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CountryFieldComponent implements OnInit {
  @Input() countryControl: FormControl;
  @Output() selectEmitter: EventEmitter<any> = new EventEmitter();

  filteredOptions: Observable<Country[]>;
  // temporary
  countries: Country[] = [];

  constructor() {
    this.countryControl = new FormControl('', [Validators.required]);

  }

  ngOnInit() {
    this.filteredOptions = this.countryControl.valueChanges
      .startWith(null)
      .map(country => country && typeof country === 'object' ? country.name : country)
      .map(name => name ? this.filter(name) : this.countries.slice());
  }

  filter(name: string): Country[] {
    return this.countries.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(country: Country): any {
    return country ? country.name : country;
  }

  public emitSelection() {
    this.selectEmitter.emit(this.countryControl.value);
  }
}
