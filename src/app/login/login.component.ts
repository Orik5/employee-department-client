import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if(this.loginForm.controls.email.value == 'dhiraj@gmail.com' && this.loginForm.controls.password.value == 'password') {
      this.router.navigate(['list-user']);
    }else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /*  model: any = {};
    //credentials={username: '', password: ''};
    constructor(private app: AppService,
                private http: HttpClient,
                private  router: Router) { }

    ngOnInit() {
      sessionStorage.setItem('token', '');
    }

    login() {



        // const url = 'http://localhost:8080/';
        // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('admin:admin') });
        // return this.http.get(url, { headers });

      const url = 'http://localhost:8080/';
      this.http.post<Observable<boolean>>(url, {

        userName: this.model.username,
        password: this.model.password
      }).subscribe(isValid => {
        if (isValid) {
          sessionStorage.setItem(
            'token',
            btoa(this.model.username + ':' + this.model.password)
          );
          this.router.navigate(['']);
        } else {
          alert("Authentication failed.")
        }
      });
  }*/
}
