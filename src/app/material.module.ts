import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule } from '@angular/material';

@NgModule ({
    imports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule],
    exports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule]
})

export class MaterialModule {}
