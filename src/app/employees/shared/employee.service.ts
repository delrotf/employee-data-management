import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Employee } from './employee.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();

  constructor(private firebase: AngularFireDatabase) {
  }

  getData() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee: Employee) {
    console.log('SUBMITTING@@@@@@@@@@@@@@@@@@@ ' + JSON.stringify(employee));
    return this.employeeList.push(employee);
  }
}
// private _getStatesFromFirebase(): State[] {
//   const statesDb: State[] = [];
//   const angularFireList = this.firebase.list('states');
//   angularFireList.snapshotChanges()
//     .subscribe(item => {
//       item.forEach(element => {
//         // tslint:disable-next-line:prefer-const
//         let state: State = <State>element.payload.toJSON();
//         statesDb.push(state);
//       });
//     });

//   return statesDb;
// }
