import { City } from './city.model';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-city-field',
  templateUrl: './city-field.component.html',
  styleUrls: ['./city-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CityFieldComponent implements OnInit {
  @Input() cities: City[];

  myControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

}
