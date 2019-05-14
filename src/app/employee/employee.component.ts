import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../models/employees.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})

export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private router: Router, private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe( data => {
        this.employees = data;
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


