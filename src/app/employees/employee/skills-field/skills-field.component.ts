import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-skills-field',
  templateUrl: './skills-field.component.html',
  styleUrls: ['./skills-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsFieldComponent implements OnInit {
  @Input() skillsControl: FormControl;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  skills = [
  ];

addToControl() {
  this.skillsControl.setValue(this.skills);
}

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add the item
    if ((value || '').trim()) {
      this.skills.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skill: any): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  constructor() {
    this.skillsControl = new FormControl('');
  }

  ngOnInit() {
    this.skillsControl.setValue(this.skills);
  }

}
