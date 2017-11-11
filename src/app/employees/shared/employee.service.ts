import { Employee } from './employee.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee = new Employee();
  constructor() { }

}
