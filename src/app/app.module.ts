import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import NoopAnimationsModule for no polyfill.
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { NgModule } from '@angular/core';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfficeFieldComponent } from './employees/employee/office-field/office-field.component';
import { EmailFieldComponent } from './employees/employee/email-field/email-field.component';
import { FirstnameFieldComponent } from './employees/employee/firstname-field/firstname-field.component';
import { MiddlenameFieldComponent } from './employees/employee/middlename-field/middlename-field.component';
import { LastnameFieldComponent } from './employees/employee/lastname-field/lastname-field.component';
import { PositionFieldComponent } from './employees/employee/position-field/position-field.component';
import { SalaryFieldComponent } from './employees/employee/salary-field/salary-field.component';
import { GenderFieldComponent } from './employees/employee/gender-field/gender-field.component';
import { AddressFieldsComponent } from './employees/employee/address-fields/address-fields.component';
import { AddressFieldComponent } from './employees/employee/address-fields/address-field/address-field.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    OfficeFieldComponent,
    EmailFieldComponent,
    FirstnameFieldComponent,
    MiddlenameFieldComponent,
    LastnameFieldComponent,
    PositionFieldComponent,
    SalaryFieldComponent,
    GenderFieldComponent,
    AddressFieldsComponent,
    AddressFieldComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
