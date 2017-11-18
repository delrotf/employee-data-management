import { State } from './state.model';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, NgModule, SimpleChanges } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroup } from '@angular/forms';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-state-field',
  templateUrl: './state-field.component.html',
  styleUrls: ['./state-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StateFieldComponent implements OnInit, OnChanges {
  @Input() stateControl: FormControl;
  @Input() states: State[];
  @Output() selectEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.stateControl = new FormControl('', [Validators.required]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.states === null) {
      this.stateControl.disable();
    } else {
      this.stateControl.enable();
    }
  }

  ngOnInit() {
    this.stateControl.disable();
  }

  public emitSelection() {
    this.selectEmitter.emit(this.stateControl.value);
  }
}
