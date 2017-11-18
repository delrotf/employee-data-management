import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-tel-field',
  templateUrl: './tel-field.component.html',
  styleUrls: ['./tel-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TelComponent implements OnInit {
  @Input() telControl: FormControl;

  constructor() {
    this.telControl = new FormControl('');
  }

  ngOnInit() {
  }

}
