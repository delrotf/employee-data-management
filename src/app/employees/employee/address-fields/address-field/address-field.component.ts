import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-field',
  templateUrl: './address-field.component.html',
  styleUrls: ['./address-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddressFieldComponent implements OnInit {
  @Input() addressControl: FormControl;

  constructor() {
    this.addressControl = new FormControl('', Validators.required);
  }

  ngOnInit() {
  }

}
