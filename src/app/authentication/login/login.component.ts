import { Component } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { User } from './../../user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'page-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  user: User;

  loginForm: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private location: Location
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
      .then(res => {
        this.router.navigate(['/form/work-list']);
      });
  }

  tryTwitterLogin() {
    this.authService.doTwitterLogin()
      .then(res => {
        this.router.navigate(['/form/work-list']);
      });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(res => {
        this.router.navigate(['/form/work-list']);
      });
  }

  tryLogin(value) {
    if (value.email === 'olgagoldin@gmail.com') {
      this.authService.doLogin(value)
        .then(res => {
          this.router.navigate(['']);
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
        });
    } else {
      console.log('Invalid credentials');
    }
  }

  logout() {
    this.authService.doLogout()
      .then((res) => {
        this.location.back();
      }, (error) => {
        console.log('Logout error', error);
      });
  }
}
