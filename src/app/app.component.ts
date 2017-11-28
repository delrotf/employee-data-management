import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AboutDialogComponent } from './employees/about-dialog/about-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Data Management';
  constructor( public dialog: MatDialog) {
    this.openDialog();
  }
  openDialog() {
    this.dialog.open(AboutDialogComponent, {
      maxWidth: '600px', panelClass: 'my-full-screen-dialog',
    });
  }
}
