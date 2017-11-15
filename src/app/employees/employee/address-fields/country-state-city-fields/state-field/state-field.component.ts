import { State } from './state.model';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, NgModule, SimpleChanges } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-state-field',
  templateUrl: './state-field.component.html',
  styleUrls: ['./state-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StateFieldComponent implements OnInit, OnChanges {
  @Input() states: State[];
  @Output() selectEmitter: EventEmitter<any> = new EventEmitter();

  myControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.states === null) {
      this.myControl.disable();
    } else {
      this.myControl.enable();
    }
  }

  ngOnInit() {
    this.myControl.disable();
  }

  public emitSelection() {
    this.selectEmitter.emit(this.myControl.value);
  }
}
