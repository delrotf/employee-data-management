import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatAutocompleteModule, MatRadioModule } from '@angular/material';

@NgModule ({
    imports: [MatInputModule, MatAutocompleteModule, MatRadioModule],
    exports: [MatInputModule, MatAutocompleteModule, MatRadioModule]
})

export class MaterialModule {}
