import { COUNTRIES } from './countries';
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

  filteredOptions: Observable<string[]>;
  countries: string[];

  constructor() {
    this.countryControl = new FormControl('', [Validators.required]);

  }

  ngOnInit() {
    setTimeout(() => {
      this.countries = COUNTRIES;
      // console.log(' this.countryControl.value ' + this.countryControl.value);
      this.filteredOptions = this.countryControl.valueChanges
        .startWith('')
        .map(val => this.filter(val));
    });
  }

  filter(val: string): string[] {
    return this.countries.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  public emitSelection() {
    this.selectEmitter.emit(this.countryControl.value);
  }
}
