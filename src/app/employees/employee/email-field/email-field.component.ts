import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmailFieldComponent implements OnInit {
  @Input() emailControl: FormControl;

  matcher = new MyErrorStateMatcher();

  constructor() {
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }

  ngOnInit() {
  }

}
