import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-salary-field',
  templateUrl: './salary-field.component.html',
  styleUrls: ['./salary-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SalaryFieldComponent implements OnInit {
@Input() salaryControl: FormControl;

  constructor() {
    this.salaryControl = new FormControl('', Validators.required);
  }

  ngOnInit() {
  }

}
