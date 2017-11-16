import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  atMost60: Date;
  atLeast18: Date;
  age: number;

  // events: string[] = [];
  // event: MatDatepickerInputEvent<Date>;
  event: any;
  hiddenEvent: MatDatepickerInputEvent<Date>;
  // tslint:disable-next-line:max-line-length
  // myControl = new FormControl('', [Validators.pattern('^(?:(?:10|12|0?[13578])/(?:3[01]|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|(?:11|0?[469])/(?:30|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/(?:2[0-8]|1[0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/29/[2468][048]00|0?2/29/[3579][26]00|0?2/29/[1][89][0][48]|0?2/29/[2-9][0-9][0][48]|0?2/29/1[89][2468][048]|0?2/29/[2-9][0-9][2468][048]|0?2/29/1[89][13579][26]|0?2/29/[2-9][0-9][13579][26])$'), Validators.required]);
  myControl = new FormControl('', [Validators.required]);
  hiddenControl = new FormControl('', []);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
    this.atLeast18 = new Date(new Date().valueOf() - (18 * 31557600000));
    console.log('this.atLeast18 ' + this.atLeast18);
    this.atMost60 = new Date(new Date().valueOf() - (60 * 31557600000));
    console.log('this.atMost60 ' + this.atMost60);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    // this.events.push(`${type}: ${event.value}`);
    this.event = event;
    this._computeAGe();
    console.log('eventfired ' + event.value);
  }

  eventFromHidden(type: string, event: MatDatepickerInputEvent<Date>) {
    this.event = event;
    this._formatDate(event.value);
    this.myControl.setValue(this._formatDate(event.value));
    this._computeAGe();
    console.log('hiddenEvent ' + event.value);
  }

  private _formatDate(value: Date): string {
    // this.events.push(`${type}: ${event.value}`);
    this.event = event;
    const year = value.getFullYear();
    const month = value.getMonth() + 1;
    const date = value.getDate();
    // formatted to yyyy-MM-dd
    const formatted = ((year < 1000) ? '0' + year : year) + '-'
      + ((month < 10) ? '0' + month : month) + '-' + ((date < 10) ? '0' + date : date);

    return formatted;
  }

  private _computeAGe(): void {
    const diff = new Date().valueOf() - new Date(this.myControl.value).valueOf();
    this.age = Math.floor(diff / 31557600000);
  }
}
