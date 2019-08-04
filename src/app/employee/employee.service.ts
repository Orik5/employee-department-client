import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Employee} from '../models/employees.model';
import {PageModel} from "../models/page.model";

import {e} from "@angular/core/src/render3";
import {Observable} from "rxjs";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) {

  }
// function (page: PageModel) {
//     this.page;
// }
  private baseUrl = 'http://localhost:8080/department/employees';
  private pageUrl ='http://localhost:8080/department/init';
  //private userUrl = '/api';

  public getEmployees() {

    return this.http.get<Employee[]>(this.baseUrl);
  }

  public deleteEmployee(employee) {
    return this.http.delete(this.baseUrl + '/' + employee.id);
  }

  public createEmployee(employee) {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  public editEmployee(employee) {
    return this.http.put(this.baseUrl, +'/' + employee.id);
  }

  public getPage(page) {
    return this.http.get<PageModel[]>(this.pageUrl + '/' + 1);
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl );
  }

  get(id: string) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  save(employee: any): Observable<any> {
    let result: Observable<Object>;
    if (employee['href']) {
      result = this.http.put(employee.href, employee);
    } else {
      result = this.http.post(this.baseUrl, employee);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
