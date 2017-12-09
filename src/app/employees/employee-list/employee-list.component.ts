import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { Employee } from '../shared/employee.model';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { EmployeeComponent } from '../employee/employee.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeListComponent implements OnInit {
  employeeList: AngularFireList<Employee>;
  skillsControl: FormControl;

  // displayedColumns = ['firstname', 'lastname', 'birthday', 'gender', 'civilStatus', 'email', 'tel',
  //   'address', 'country', 'state', 'city', 'postalCode', 'position', 'office', 'hireDate', 'skills', 'salary',
  //   'travel', 'nightshift', 'workAtHome', 'stockOption'];

  displayedColumns = ['employees'];
  dataSource: MatTableDataSource<any>;

  constructor(private employeeService: EmployeeService, public dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.employeeService.getData().snapshotChanges().subscribe(items => {
      const employees: any[] = [];
      items.forEach(item => {
        const employee: Employee = <Employee>item.payload.val();
        employee['$key'] = item.key;

        // console.log('employeeee ' + JSON.stringify(employee));
        employees.push({
          key: employee.$key,
          name: `${employee.name.firstname}  ${employee.name.lastname}`,
          birthday: employee.birthday,
          gender: employee.gender,
          civilStatus: employee.civilStatus,
          address: employee.address.address,
          country: employee.address.country,
          state: employee.address.state ? employee.address.state.name : employee.address.state,
          city: employee.address.city,
          postalCode: employee.address.postalCode,
          email: employee.email,
          tel: employee.tel,
          position: employee.position,
          skills: employee.skills ? employee.skills.map(val => val.name).join(', ') : employee.skills,
          hireDate: employee.hireDate,
          office: employee.office,
          salary: employee.salary,
          travel: employee.preferences.travel,
          nightshift: employee.preferences.nightshift,
          workAtHome: employee.preferences.workAtHome,
          stockOption: employee.preferences.stockOption,
          employee: employee
        });
      });
      this.dataSource = new MatTableDataSource(employees);
    });

  }
  openDialog(employee?: Employee) {
    const dialogRef = this.dialog.open(EmployeeComponent, {
      data: { employee: employee }, panelClass: 'my-full-screen-dialog',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
