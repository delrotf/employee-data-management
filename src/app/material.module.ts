import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule, MatCheckboxModule, MatCardModule } from '@angular/material';

@NgModule ({
    imports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule, MatCheckboxModule, MatCardModule],
    exports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule, MatCheckboxModule, MatCardModule]
})

export class MaterialModule {}
