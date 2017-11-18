import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-address-fields',
  templateUrl: './address-fields.component.html',
  styleUrls: ['./address-fields.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddressFieldsComponent implements OnInit {
  @Input() addressControl: FormControl;
  @Input() countryControl: FormControl;
  @Input() stateControl: FormControl;
  @Input() cityControl: FormControl;
  @Input() postalCodeControl: FormControl;

  constructor() {
  }

  ngOnInit() {
  }

}
