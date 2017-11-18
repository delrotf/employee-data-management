import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

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

  today = new Date().valueOf();
  hiddenControl = new FormControl('', []);
  maxAge = 60;
  minAge = 18;
  maxDate = new Date(this.today - (this.minAge * 31557600000)); // at most 60;
  minDate = new Date(this.today - (this.maxAge * 31557600000)); // at least 18;
  age: number;

  // events: string[] = [];
  // event: MatDatepickerInputEvent<Date>;
  event: any;
  hiddenEvent: MatDatepickerInputEvent<Date>;
  // tslint:disable-next-line:max-line-length
  // myControl = new FormControl('', [Validators.pattern('^(?:(?:10|12|0?[13578])/(?:3[01]|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|(?:11|0?[469])/(?:30|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/(?:2[0-8]|1[0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/29/[2468][048]00|0?2/29/[3579][26]00|0?2/29/[1][89][0][48]|0?2/29/[2-9][0-9][0][48]|0?2/29/1[89][2468][048]|0?2/29/[2-9][0-9][2468][048]|0?2/29/1[89][13579][26]|0?2/29/[2-9][0-9][13579][26])$'), Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor() {
    this.birthdayControl = new FormControl('', Validators.required); // when stand alone.
  }

  ngOnInit() {
  }

  computeAge(date: Date): number {
    const diff = this.today - new Date(date).valueOf();
    return Math.floor(diff / 31557600000);
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.age = this.computeAge(this.birthdayControl.value);
    if (this.age < this.minAge || this.age > this.maxAge) {
      this.birthdayControl.setValue(null);
    }
    console.log('eventfired ' + event.value);
  }
  eventFromHidden(type: string, event: MatDatepickerInputEvent<Date>) {
    this.formatDate(event.value);
    this.birthdayControl.setValue(this.formatDate(event.value));
    this.age = this.computeAge(event.value);
    console.log('hiddenEvent ' + event.value);
  }

  formatDate(value: Date): string {
    if (value !== null && value !== undefined) {
      const year = value.getFullYear();
      const month = value.getMonth() + 1;
      const date = value.getDate();
      // formatted to yyyy-MM-dd
      const formatted = ((year < 1000) ? '0' + year : year) + '-'
        + ((month < 10) ? '0' + month : month) + '-' + ((date < 10) ? '0' + date : date);
      return formatted;
    }
  }
}
