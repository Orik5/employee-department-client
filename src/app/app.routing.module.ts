import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import {AddEmployeeComponent} from './employee/add-employee.component';
import {EditEmployeeComponent} from "./edit-employee/edit-employee.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
/*  { path: 'employees', component: EmployeeComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'edit', component: EmployeeEditComponent }*/
//  { path: '', component: LoginComponent },
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
    component: EditEmployeeComponent}
 //  },
 //
 // {path : 'login', component : LoginComponent}
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
