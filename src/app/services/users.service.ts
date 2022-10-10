import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { handleHttpError } from '../libs/commonFunction';
import { apiUrl } from '../libs/appConstants';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login({ email, password }): Observable<any> {
    return this.http
      .get(`${apiUrl}/users?email=${email}&password=${password}`)
      .pipe(catchError((err) => handleHttpError(err)))
      .pipe(delay(2000));
  }
}
