import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './app.routing.module';
import {EmployeeService} from './employee/employee.service';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AddEmployeeComponent} from './employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppService} from "./app.service";
import {NgxPaginationModule} from "ngx-pagination";
import {CustomMaterialModule} from "./material.module";
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}




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
    EditEmployeeComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CustomMaterialModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
