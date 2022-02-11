import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  credencialesError = false;
  email:string;
  password:string;

  constructor(private router: Router,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      if (this.email === 'pruebas@aivo.com' && this.password === 'pruebas') {
        this.router.navigateByUrl('/home-page');
      } else {
        this.credencialesError = true;
      }
    }
  }

  get f() { return this.loginForm.controls; }

}
