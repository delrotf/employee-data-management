import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ErrorStateMatcher } from '@angular/material/core';
import { Employee } from './../shared/employee.model';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit, ViewEncapsulation, Input, SimpleChanges, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDatepickerInputEvent, MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { minDate, maxDate } from '../../employees/validators/dateValidator';
import { formatDate } from '../../app.util';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';

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
  encapsulation: ViewEncapsulation.None,
  providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit, OnChanges {
  @Input() employee: Employee;

  employeeForm: FormGroup;
  submitted: boolean;
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

  showProgress = false;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public snackBar: MatSnackBar, private employeeService: EmployeeService) {

    if (data) {
      this.employee = data.employee;
    }
  }

  upsert() {

    if (this.genderControl.hasError('required')) {
      this.genderControl.markAsTouched();
    }
    if (this.civilStatusControl.hasError('required')) {
      this.civilStatusControl.markAsTouched();
    }

    if (this.employeeForm.valid) {
      this.showProgress = true;
      console.log(JSON.stringify(this.employeeForm.value));
      this.employeeService.upsertEmployee(this.employeeForm.value, this.employee.$key);
      this.dialogRef.close();
      this.snackBar.open(`${this.employee.name.firstname} ${this.employee.name.lastname} has been saved.`, 'OK', {
        duration: 3000,
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.showProgress) {
      console.log(this.employeeForm);
    }
  }

  ngOnInit() {
    const employee = this.employee;

    this.firstnameControl = new FormControl(employee ? employee.name.firstname : '', Validators.required);
    this.lastnameControl = new FormControl(employee ? employee.name.lastname : '', Validators.required);
    this.birthdayControl = new FormControl(employee ? employee.birthday : '');
    this.genderControl = new FormControl(employee ? employee.gender : '', Validators.required);
    this.civilStatusControl = new FormControl(employee ? employee.civilStatus : '', Validators.required);

    this.addressControl = new FormControl(employee ? employee.address.address : '', Validators.required);
    this.countryControl = new FormControl(employee ? employee.address.country : '', Validators.required);
    this.stateControl = new FormControl(employee ? employee.address.state : '', Validators.required);
    this.cityControl = new FormControl(employee ? employee.address.city : '', Validators.required);
    this.postalCodeControl = new FormControl(employee ? employee.address.postalCode : '', Validators.required);

    this.emailControl = new FormControl(employee ? employee.email : '', [Validators.required, Validators.email]);
    this.telControl = new FormControl(employee ? employee.tel : '');
    this.positionControl = new FormControl(employee ? employee.position : '', Validators.required);
    this.skillsControl = new FormControl(employee ? employee.skills : '');

    this.hireDateControl = new FormControl(employee ? employee.hireDate : '', Validators.required);

    this.travelControl = new FormControl(employee ? employee.preferences.travel : false);
    this.nightshiftControl = new FormControl(employee ? employee.preferences.nightshift : false);
    this.workAtHomeControl = new FormControl(employee ? employee.preferences.workAtHome : false);
    this.stockOptionControl = new FormControl(employee ? employee.preferences.stockOption : false);

    this.officeControl = new FormControl(employee ? employee.office : '', Validators.required);
    this.salaryControl = new FormControl(employee ? employee.salary : '', Validators.required);

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
