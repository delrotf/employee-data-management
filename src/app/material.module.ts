import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule ({
    imports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule],
    exports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule]
})

export class MaterialModule {}
