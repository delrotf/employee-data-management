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
// tslint:disable-next-line:max-line-length
import { CountryStateCityFieldsComponent } from './employees/employee/address-fields/country-state-city-fields/country-state-city-fields.component';
import { CountryFieldComponent } from './employees/employee/address-fields/country-state-city-fields/country-field/country-field.component';
import { StateFieldComponent } from './employees/employee/address-fields/country-state-city-fields/state-field/state-field.component';
import { CityFieldComponent } from './employees/employee/address-fields/country-state-city-fields/city-field/city-field.component';
import { PostalCodeFieldComponent } from './employees/employee/address-fields/postal-code-field/postal-code-field.component';

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
    AddressFieldComponent,
    CountryStateCityFieldsComponent,
    CountryFieldComponent,
    StateFieldComponent,
    CityFieldComponent,
    PostalCodeFieldComponent,
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
