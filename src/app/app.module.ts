import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './app.routing.module';
import {EmployeeService} from './employee/employee.service';
import {HttpClientModule} from "@angular/common/http";
import {AddEmployeeComponent} from './employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';




/*const appRoutes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  {
    path: 'employees',
    component: EmployeeComponent;
  },
  {
    path: 'employee-add',
    component: CarEditComponent
  },
  {
    path: 'employee-edit/:id',
    component: CarEditComponent
  }
];*/
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
