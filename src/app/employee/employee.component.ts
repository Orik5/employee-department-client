import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../models/employees.model';
import { EmployeeService } from './employee.service';
import {log} from "util";
import {PageModel} from "../models/page.model";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})

export class EmployeeComponent implements OnInit {
  employees: Employee[];
  data=this.employees;
  pages: PageModel[];

  collection = { count: 60, data: [] };
  //collection = { count: Employee[].le, data: [] };
  config = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.employees};
  // @Input() id: string;
  // @Input() maxSize: number;
  // @Output() pageChange: EventEmitter<number>;
  p: number = 1;

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: '<--',
    nextLabel: '-->',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };
  constructor(private router: Router, private employeeService: EmployeeService) {
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
        }
      );
    }
  }
  onPageChange(event){
    console.log(event);
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe( data => {
        this.employees = data;
      });
  }
getPageResult(page:PageModel){
    this.employeeService.getPage(page).subscribe( data => {
      this.pages = data;
    });
}
  deleteEmployee(employee: Employee): void {
    this.employeeService.deleteEmployee(employee)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employee);
      });

  }
  editEmployee(employee: Employee): void {
    localStorage.removeItem("editEmployeeId");
    localStorage.setItem("editEmployeeId", employee.id.toString());
    this.router.navigate(['edit']);
  };

  onEdit(employee:Employee) {
    this.router.navigate([this.employeeService.editEmployee(employee), employee.id]);
  }

}


