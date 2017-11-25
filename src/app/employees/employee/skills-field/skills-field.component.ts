import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { Skill } from '../../shared/employee.model';

@Component({
  selector: 'app-skills-field',
  templateUrl: './skills-field.component.html',
  styleUrls: ['./skills-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsFieldComponent implements OnInit, OnChanges {
  @Input() skillsControl: FormControl;
  skills: Skill[] = [];

  visible = true;
  selectable = false;
  removable = true;
  addOnBlur = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  addToControl() {
    this.skillsControl.setValue(this.skills);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add the item
    if ((value || '').trim()) {
      const skill = new Skill();
      skill.name = value.trim();
      // this.skills.push({ name: value.trim() });
      this.skills.push(skill);
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

  ngOnChanges() {
    if (this.skillsControl && this.skillsControl.value) {
      this.skills = this.skillsControl.value;
    }
  }

  ngOnInit() {
    // this.skillsControl.setValue(this.skills);
  }

}
