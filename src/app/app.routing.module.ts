import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import {AddEmployeeComponent} from './employee/add-employee.component';
import {EditEmployeeComponent} from "./edit-employee/edit-employee.component";


const routes: Routes = [
/*  { path: 'employees', component: EmployeeComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'edit', component: EmployeeEditComponent }*/
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  {
    path: 'employees',
    component: EmployeeComponent
  },
  {
    path: 'add',
    component: AddEmployeeComponent
  }
  ,
  {
    path: 'edit',
    component: EditEmployeeComponent
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
