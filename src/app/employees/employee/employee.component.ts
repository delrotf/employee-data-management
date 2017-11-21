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

  employeeForm: FormGroup;
  firstnameControl = new FormControl('', Validators.required);
  lastnameControl = new FormControl('', Validators.required);
  birthdayControl = new FormControl();
  genderControl = new FormControl('', Validators.required);
  civilStatusControl = new FormControl('', Validators.required);
  addressControl = new FormControl('', Validators.required);
  countryControl = new FormControl('', Validators.required);
  stateControl = new FormControl('', Validators.required);
  cityControl = new FormControl('', Validators.required);
  postalCodeControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  telControl = new FormControl('');
  positionControl = new FormControl('', Validators.required);
  skillsControl = new FormControl('');

  hireDateControl = new FormControl('', Validators.required);

  travelControl = new FormControl('');
  nightshiftControl = new FormControl('');
  workAtHomeControl = new FormControl('');
  stockOptionControl = new FormControl('');
  officeControl = new FormControl('', Validators.required);
  salaryControl = new FormControl('', Validators.required);

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employee = new Employee();
    this.createForm();

  }

  onSubmit() {
    if (this.genderControl.hasError('required')) {
      this.genderControl.markAsTouched();
    }
    if (this.civilStatusControl.hasError('required')) {
      this.civilStatusControl.markAsTouched();
    }
  }

  ngOnInit() {
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
