import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-position-field',
  templateUrl: './position-field.component.html',
  styleUrls: ['./position-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PositionFieldComponent implements OnInit {
  myControl: FormControl = new FormControl();

  options = [
    // TODO: get from firebase
    'Assistant Sales Manager',
    'HR Officer',
    'Business Analyst'
  ];

  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .startWith('')
      .map(val => this.filter(val));
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}
