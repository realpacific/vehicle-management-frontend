import { HttpErrorResponse } from '@angular/common/http';

export const BASE_URL = "http://localhost:8080";

export class BaseResponse {
    constructor(public message: string, public data: any){}
}
