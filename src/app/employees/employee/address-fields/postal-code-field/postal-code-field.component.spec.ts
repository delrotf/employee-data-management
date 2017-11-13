import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalCodeFieldComponent } from './postal-code-field.component';

describe('PostalCodeFieldComponent', () => {
  let component: PostalCodeFieldComponent;
  let fixture: ComponentFixture<PostalCodeFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostalCodeFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalCodeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
