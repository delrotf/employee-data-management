import { EmployeeService } from './shared/employee.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService, public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(EmployeeComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
