import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, Validators, FormGroupDirective, NgForm, AbstractControl, ValidatorFn } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { formatDate, formatDateLocale, computeAge } from '../app.util';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent implements OnInit {
  @Input() dateControl: FormControl;
  @Input() placeholderText: string;
  @Input() minDate: string;
  @Input() maxDate: string;
  @Input() minAge: number;
  @Input() maxAge: number;

  age: number;

  minDateLocale: string;
  maxDateLocale: string;

  hiddenControl = new FormControl('', []);
  hiddenEvent: MatDatepickerInputEvent<Date>;

  matcher = new MyErrorStateMatcher();

  constructor() {
    this.dateControl = new FormControl(''); // when stand alone.
  }

  ngOnInit() {
    if (this.minDate) {
      this.minDateLocale = formatDateLocale(new Date(this.minDate));
    }
    if (this.maxDate) {
      this.maxDateLocale = formatDateLocale(new Date(this.maxDate));
    }

    this.dateControl.valueChanges.subscribe((value) => {
      if (this.minAge && this.maxAge) {
        this.age = computeAge(new Date(value));
      }
    });

    this.hiddenControl.valueChanges.subscribe((value) => {
      this.dateControl.setValue(formatDate(new Date(value)));

      if (this.minAge && this.maxAge) {
        this.age = computeAge(new Date(value));
      }
    });
  }
}
