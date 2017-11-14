import { State } from './state.model';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-state-field',
  templateUrl: './state-field.component.html',
  styleUrls: ['./state-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StateFieldComponent implements OnInit {
  @Input() states: State[];
  @Output() selectEmitter: EventEmitter<any> = new EventEmitter();

  myControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

  public emitSelection() {
    this.selectEmitter.emit(this.myControl.value);
  }
}
