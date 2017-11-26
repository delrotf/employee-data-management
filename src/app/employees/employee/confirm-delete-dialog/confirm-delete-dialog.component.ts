import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmDeleteDialogComponent implements OnInit {
  employee: Employee;

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.employee = data.employee;
    }
  }

  ngOnInit() {
  }

}
