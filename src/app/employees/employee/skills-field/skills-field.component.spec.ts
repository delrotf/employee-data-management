import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsFieldComponent } from './skills-field.component';

describe('SkillsFieldComponent', () => {
  let component: SkillsFieldComponent;
  let fixture: ComponentFixture<SkillsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
