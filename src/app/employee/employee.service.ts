import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from '../models/employees.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  constructor(private http:HttpClient) {}

  private baseUrl = 'http://localhost:8080/employees';
  //private userUrl = '/api';

  public getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  public deleteEmployee(employee) {
    return this.http.delete(this.baseUrl +  employee);
  }

  public createEmployee(employee) {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

}
