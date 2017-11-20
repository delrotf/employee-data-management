import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { minDate, maxDate, minAge, maxAge } from '../../validators/dateValidator';
import { formatDate, computeAge, removeTime } from '../../../app.util';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    // console.log('control ' + control);
    // console.log('control.invalid ' + control.invalid);
    // console.log('control.dirty ' + control.dirty);
    // console.log('control.touched ' + control.touched);
    // console.log('isSubmitted ' + isSubmitted);

    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-birthday-field',
  templateUrl: './birthday-field.component.html',
  styleUrls: ['./birthday-field.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class BirthdayFieldComponent implements OnInit {
  @Input() birthdayControl: FormControl;

  today = removeTime(new Date()).valueOf();
  maxAge = 60;
  minAge = 18;
  maxDate = formatDate(new Date(this.today - ((this.minAge) * 31557600000))); // at most 60;
  minDate = formatDate(new Date(this.today - ((this.maxAge) * 31557600000))); // at least 18; // 31557600000
  age: number;

  matcher = new MyErrorStateMatcher();

  constructor() {
    this.birthdayControl = new FormControl('', Validators.required); // when stand alone.
  }

  ngOnInit() {
    this.birthdayControl.setValidators([Validators.required,
    minAge(this.minAge),
    maxAge(this.maxAge)]);
  }
}
