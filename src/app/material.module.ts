import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule,
    MatCheckboxModule, MatCardModule, MatButtonModule, MatStepperModule, MatDialogModule, MatExpansionModule
} from '@angular/material';
import { EmployeeComponent } from './employees/employee/employee.component';

@NgModule({
    imports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule,
        MatCheckboxModule, MatCardModule, MatButtonModule, MatStepperModule, MatDialogModule, MatExpansionModule],
    exports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule,
        MatCheckboxModule, MatCardModule, MatButtonModule, MatStepperModule, MatDialogModule, MatExpansionModule],
})

export class MaterialModule { }
