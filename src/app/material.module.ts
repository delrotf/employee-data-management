import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule } from '@angular/material';

@NgModule ({
    imports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule],
    exports: [MatInputModule, MatAutocompleteModule, MatRadioModule, MatSelectModule]
})

export class MaterialModule {}
