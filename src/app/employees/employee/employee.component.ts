import { ErrorStateMatcher } from '@angular/material/core';
import { Employee } from './../shared/employee.model';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import { minDate, maxDate } from '../../employees/validators/dateValidator';
import { formatDate } from '../../app.util';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  submitted: boolean;

  employeeForm: FormGroup;
  firstnameControl: FormControl;
  lastnameControl: FormControl;
  birthdayControl = new FormControl();
  genderControl: FormControl;
  civilStatusControl: FormControl;
  addressControl: FormControl;
  countryControl: FormControl;
  stateControl: FormControl;
  cityControl: FormControl;
  postalCodeControl: FormControl;
  emailControl: FormControl;
  telControl: FormControl;
  positionControl: FormControl;
  skillsControl: FormControl;

  hireDateControl: FormControl;

  travelControl: FormControl;
  nightshiftControl: FormControl;
  workAtHomeControl: FormControl;
  stockOptionControl: FormControl;
  officeControl: FormControl;
  salaryControl: FormControl;

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employee = new Employee();

  }

  onSubmit() {
    this.submitted = true;

    if (this.genderControl.hasError('required')) {
      this.genderControl.markAsTouched();
    }
    if (this.civilStatusControl.hasError('required')) {
      this.civilStatusControl.markAsTouched();
    }
  }

  ngOnInit() {
    this.firstnameControl = new FormControl('', Validators.required);
    this.lastnameControl = new FormControl('', Validators.required);
    this.birthdayControl = new FormControl('');
    this.genderControl = new FormControl('', Validators.required);
    this.civilStatusControl = new FormControl('', Validators.required);

    this.addressControl = new FormControl('', Validators.required);
    this.countryControl = new FormControl('', Validators.required);
    this.stateControl = new FormControl('', Validators.required);
    this.cityControl = new FormControl('', Validators.required);
    this.postalCodeControl = new FormControl('', Validators.required);

    this.emailControl = new FormControl('', [Validators.required, Validators.email]);
    this.telControl = new FormControl('');
    this.positionControl = new FormControl('', Validators.required);
    this.skillsControl = new FormControl('');

    this.hireDateControl = new FormControl(formatDate(new Date()), Validators.required);

    this.travelControl = new FormControl(false);
    this.nightshiftControl = new FormControl(false);
    this.workAtHomeControl = new FormControl(false);
    this.stockOptionControl = new FormControl(false);

    this.officeControl = new FormControl('', Validators.required);
    this.salaryControl = new FormControl('', Validators.required);

    this.createForm();
  }

  createForm() {
    this.employeeForm = this.fb.group({
      name: this.fb.group({
        firstname: this.firstnameControl,
        lastname: this.lastnameControl
      }),
      birthday: this.birthdayControl,
      gender: this.genderControl,
      civilStatus: this.civilStatusControl,
      address: this.fb.group({
        address: this.addressControl,
        country: this.countryControl,
        state: this.stateControl,
        city: this.cityControl,
        postalCode: this.postalCodeControl
      }),
      email: this.emailControl,
      tel: this.telControl,
      position: this.positionControl,
      skills: this.skillsControl,
      preferences: this.fb.group({
        travel: this.travelControl,
        nightShift: this.nightshiftControl,
        workAtHome: this.workAtHomeControl,
        stockOption: this.stockOptionControl
      }),
      hireDate: this.hireDateControl,
      office: this.officeControl,
      salary: this.salaryControl
    });
  }
}
