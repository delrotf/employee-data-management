import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule,
    MatCheckboxModule, MatCardModule, MatButtonModule, MatStepperModule,
    MatDialogModule, MatExpansionModule, MatProgressBarModule, MatTableModule
} from '@angular/material';
import { EmployeeComponent } from './employees/employee/employee.component';

@NgModule({
    imports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule,
        MatCheckboxModule, MatCardModule, MatButtonModule, MatStepperModule,
        MatDialogModule, MatExpansionModule, MatProgressBarModule, MatTableModule],
    exports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule,
        MatCheckboxModule, MatCardModule, MatButtonModule, MatStepperModule,
        MatDialogModule, MatExpansionModule, MatProgressBarModule, MatTableModule],
})

export class MaterialModule { }
