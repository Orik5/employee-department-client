import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../employee/employee.service";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit/*, OnDestroy*/ {
  employee: any = {};


  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,private router: Router, private employeeService: EmployeeService/*private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService*/) {
  }
  ngOnInit() {
    let employeeId = localStorage.getItem("editEmployeeId");
    if(!employeeId) {
      alert("Invalid action.")
      this.router.navigate(['employees']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['',Validators.required],
      active: ['',Validators.required],
      department: ['',Validators.required]
     /* email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]*/
    });
    this.employeeService.get(employeeId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.employeeService.editEmployee(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['employees']);
        },
        error => {
          alert(error);
        });
  }
 /* ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.employeeService.get(id).subscribe((employee: any) => {
          if (employee) {
            this.employee = employee;
            this.employee.href = employee._links.self.href;
           // this.employeeService.get(employee.name).subscribe(url => employee.giphyUrl = url);
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

  save(form: NgForm) {
    this.employeeService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.employeeService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  edit(form: NgForm) {
    this.employeeService.editEmployee(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }*/
}
