import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
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
  @Input() positionControl: FormControl;

  options = [
    // TODO: get from firebase
    'Assistant Sales Manager',
    'HR Officer',
    'Business Analyst'
  ];

  filteredOptions: Observable<string[]>;

  constructor() {
    this.positionControl = new FormControl();
  }

  ngOnInit() {
    this.filteredOptions = this.positionControl.valueChanges
      .startWith('')
      .map(val => this.filter(val));
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}
