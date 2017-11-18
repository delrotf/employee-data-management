import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-postal-code-field',
  templateUrl: './postal-code-field.component.html',
  styleUrls: ['./postal-code-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostalCodeFieldComponent implements OnInit {
  @Input() postalCodeControl: FormControl;

  matcher = new MyErrorStateMatcher();

  constructor() {
    this.postalCodeControl = new FormControl('', Validators.required);
  }

  ngOnInit() {
  }

}
