import { STATES } from './states';
import { State } from './state.model';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, NgModule, SimpleChanges } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroup } from '@angular/forms';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-state-field',
  templateUrl: './state-field.component.html',
  styleUrls: ['./state-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StateFieldComponent implements OnInit, OnChanges {
  @Input() stateControl: FormControl;
  @Input() country: string;
  @Input() states: State[] = [];
  @Output() selectEmitter: EventEmitter<any> = new EventEmitter();

  filteredOptions: Observable<State[]>;

  constructor() {
    this.stateControl = new FormControl('', [Validators.required]); // when stand alone.
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.states = null;

    if (this.country) {
      this.states = STATES[this.country];
      this.stateControl.enable();
      // console.log('this.stateControl.value ' + this.stateControl.value);
    } else {
      this.stateControl.reset();
      this.stateControl.disable();
    }

    // console.log('State onChanges ' + this.states);
    this.stateControl.updateValueAndValidity();

    // console.log('ngOnInit ' + this.states);
    this.filteredOptions = this.stateControl.valueChanges
      .startWith(null)
      .map(state => {
        // console.log('map state ' + state);
        return state && typeof state === 'object' ? state.name : state;
      })
      .map(name => {
        // console.log('map name ' + name);
        return name ? this.filter(name) : this.states ? this.states.slice() : null;
      });
  }

  ngOnInit() {
  }

  filter(name: string): State[] {
    return this.states ? this.states.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0) : null;
  }

  displayFn(state: State): any {
    return state ? state.name : state;
  }

  public emitSelection() {
    this.selectEmitter.emit(this.stateControl.value);
  }
}
