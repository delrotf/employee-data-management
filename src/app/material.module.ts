import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule, MatCheckboxModule, 
    MatCardModule, MatButtonModule } from '@angular/material';

@NgModule ({
    imports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule, MatCheckboxModule, MatCardModule, MatButtonModule],
    exports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule, MatCheckboxModule, MatCardModule, MatButtonModule]
})

export class MaterialModule {}
