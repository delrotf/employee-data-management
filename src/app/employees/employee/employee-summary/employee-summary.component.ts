import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Employee, PreferenceText } from '../../shared/employee.model';
import { MatDialog } from '@angular/material';
import { EmployeeComponent } from '../employee.component';
import { EmployeeService } from '../../shared/employee.service';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-employee-summary',
  templateUrl: './employee-summary.component.html',
  styleUrls: ['./employee-summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeSummaryComponent implements OnInit {
  @Input() employee: Employee;
  flatSkills: string;

  PreferenceText = PreferenceText;

  constructor(private employeeService: EmployeeService, public dialog: MatDialog) { }

  ngOnInit() {
    this.flatSkills = this.employee && this.employee.skills ? this.employee.skills.map(val => val.name).join(', ') : '';
  }

  // open the dialog for delete confirmation
  confirmDelete() {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: { employee: this.employee }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 'Yes') {
        this.delete();
      }
    });
  }

  delete() {
    this.employeeService.delete(this.employee.$key);
  }

  // opens the dialog for edit
  edit() {
    const dialogRef = this.dialog.open(EmployeeComponent, {
      data: { employee: this.employee }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
