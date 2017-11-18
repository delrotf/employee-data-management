import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

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
export class FirstnameFieldComponent implements OnInit, OnChanges {
  @Input() firstnameControl: FormControl;

  matcher = new MyErrorStateMatcher();

  constructor() {
    this.firstnameControl = new FormControl('', [Validators.required]); // when stand alone.
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
