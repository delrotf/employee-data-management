import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Employee, PreferenceText } from '../../shared/employee.model';
import { MatDialog } from '@angular/material';
import { EmployeeComponent } from '../employee.component';

@Component({
  selector: 'app-employee-summary',
  templateUrl: './employee-summary.component.html',
  styleUrls: ['./employee-summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeSummaryComponent implements OnInit {
@Input() employee: Employee;
PreferenceText = PreferenceText;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeComponent, {
      data: { employee: employee }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
