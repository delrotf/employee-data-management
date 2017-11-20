import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, Validators, FormGroupDirective, NgForm, AbstractControl, ValidatorFn } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { minDate, maxDate } from '../../../employees/validators/dateValidator';
import { formatDate, formatDateLocale } from '../../../app.util';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-hire-date-field',
  templateUrl: './hire-date-field.component.html',
  styleUrls: ['./hire-date-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HireDateFieldComponent implements OnInit {
  @Input() hireDateControl: FormControl;
  @Input() minDate: string;
  @Input() maxDate: string;

  constructor() {
  }

  ngOnInit() {
  }
}
