import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gender-field',
  templateUrl: './gender-field.component.html',
  styleUrls: ['./gender-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GenderFieldComponent implements OnInit {
  @Input() genderControl: FormControl;

  gender: string;

  genders = [
    'Male',
    'Female'
  ];

  constructor() {
    this.genderControl = new FormControl('', Validators.required);
  }

  ngOnInit() {
  }

}
