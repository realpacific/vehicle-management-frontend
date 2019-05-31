import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/app.constant';

export class AuthenticateModel {
  constructor(public email: String, public password: String) { }
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public authenticateUser(email: String, password: String) {
    return this.http.post(`${BASE_URL}/user/authenticate`, new AuthenticateModel(email, password))
  }
}
