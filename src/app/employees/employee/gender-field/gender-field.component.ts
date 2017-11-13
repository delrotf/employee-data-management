import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-gender-field',
  templateUrl: './gender-field.component.html',
  styleUrls: ['./gender-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GenderFieldComponent implements OnInit {
  gender: string;

    genders = [
      'Male',
      'Female'
    ];

  constructor() { }

  ngOnInit() {
  }

}
