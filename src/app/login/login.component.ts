import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { LoginService } from '../service/login.service';
import { BaseResponse } from '../app.constant';
import { HttpErrorResponse } from '@angular/common/http';
import { openSync } from 'fs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(private _snackBar: MatSnackBar, private loginService: LoginService) { }

  ngOnInit() {
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

  authenticateUser() {
    if (!this.email.valid || !this.password.valid) {
      this.openSnackBar("Invalid inputs.")
      return;
    }
    this.loginService.authenticateUser(this.email.value, this.password.value).subscribe(response => {

    }, error => {
      this.openSnackBar((<BaseResponse>(<HttpErrorResponse>error).error).message)
    })

  }

}
