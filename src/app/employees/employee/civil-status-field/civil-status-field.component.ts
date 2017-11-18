import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-civil-status-field',
  templateUrl: './civil-status-field.component.html',
  styleUrls: ['./civil-status-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CivilStatusFieldComponent implements OnInit {
  @Input() civilStatusControl: FormControl;

  status: string;
  statuses = [
    'Single',
    'Married',
    'Divorced',
    'Separated',
    'Widowed'
  ];


  constructor() {
    this.civilStatusControl = new FormControl('', Validators.required);
  }

  ngOnInit() {
  }

}
