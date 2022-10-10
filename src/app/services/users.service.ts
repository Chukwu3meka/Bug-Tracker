import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { handleHttpError, httpOptions } from '../libs/commonFunction';
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

  reset(email): Observable<any> {
    this.http.get(`${apiUrl}/users?email=${email}`).subscribe((profile) => {
      if (profile) {
        this.http.patch(
          `${apiUrl}/users/${profile[0].id}`,
          { password: 7777 },
          httpOptions({ HttpHeaders })
        );
      }
    });

    return of('success').pipe(delay(2000));
  }
}
