import { Component, OnInit } from '@angular/core';
import { BaseResponse } from '../entities/base-response';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide: boolean = true;
  email: FormControl
  password: FormControl
  passwordConfirm: FormControl
  name: FormControl
  address: FormControl
  phone: FormControl

  accountValidationMessages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  }
  constructor(private _snackBar: MatSnackBar, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
    this.passwordConfirm = new FormControl('', [Validators.required]);
    this.address = new FormControl('', [Validators.required]);
    this.phone = new FormControl('', [Validators.required, Validators.pattern('^\\+?\\[d{3}[- ]]?\\d{5,13}$')]);
    this.name = new FormControl('', [Validators.required, Validators.minLength(5)]);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "", {
      duration: 2000,
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  signupUser() {
    if (!this.email.valid || !this.password.valid) {
      this.openSnackBar("Invalid inputs.")
      return;
    }
    this.loginService.authenticateUser(this.email.value, this.password.value).subscribe(response => {
      this.router.navigate([this.email.value, "vehicles"])
    }, error => {
      this.openSnackBar((<BaseResponse>(<HttpErrorResponse>error).error).message)
    })

  }
}