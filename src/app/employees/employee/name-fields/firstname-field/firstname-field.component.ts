import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-firstname-field',
  templateUrl: './firstname-field.component.html',
  styleUrls: ['./firstname-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FirstnameFieldComponent implements OnInit {
  myControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
  }

}
