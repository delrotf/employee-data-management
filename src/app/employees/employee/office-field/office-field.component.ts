import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-office-field',
  templateUrl: './office-field.component.html',
  styleUrls: ['./office-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OfficeFieldComponent implements OnInit {
  @Input() officeControl: FormControl;
  filteredOffices: Observable<any[]>;

  offices: any[] = [
    {
      name: 'IBMP',
      state: 'Arkansas',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'UPA',
      state: 'Arkansas',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'ABC',
      state: 'California',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'RELA',
      state: 'Florida',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'CHA',
      state: 'Texas',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  constructor() {
    this.officeControl = new FormControl('', Validators.required);
  }

  filteroffices(state: string) {
    return this.offices.filter(office =>
      office.state.toLowerCase().indexOf(state.toLowerCase()) === 0);
  }

  ngOnInit() {
    this.filteredOffices = this.officeControl.valueChanges
    .startWith(null)
    .map(office => office ? this.filteroffices(office) : this.offices.slice());
}

}
