import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../app.constant';
import { Vehicle } from '../entities/vehicle';
import { BaseResponse } from '../entities/base-response';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getVehicleByEmail(email: string) {
    return this.http.get<BaseResponse>(`${BASE_URL}/user/${email}/vehicles`)
  }
}
