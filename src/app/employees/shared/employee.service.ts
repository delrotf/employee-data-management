import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Employee } from './employee.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any> = this.firebase.list('employees');

  constructor(private firebase: AngularFireDatabase) {
  }

  getData() {
    return this.employeeList;
  }

  upsertEmployee($key: string, employee: Employee) {
    if ($key) {
      return this.employeeList.update($key, employee);
    } else {
      return this.employeeList.push(employee);
    }
  }

  delete($key: string) {
    return this.employeeList.remove($key);
  }
}
