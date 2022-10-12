import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { handleHttpError, httpOptions } from '../libs/commonFunction';
import { apiDelay, apiUrl } from '../libs/appConstants';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login({ email, password }): Observable<any> {
    return this.http
      .get(`${apiUrl}/users?email=${email}&password=${password}`)
      .pipe(catchError((err) => handleHttpError(err)))
      .pipe(delay(apiDelay));
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

    return of('success').pipe(delay(apiDelay));
  }

  // get developers belonging to a particular team
  getTeamDeveloper(teamId): Observable<any> {
    return this.http
      .get(`${apiUrl}/users?team=${teamId}`)
      .pipe(delay(apiDelay))
      .pipe(catchError((err) => handleHttpError(err)));
  }

  // get developers belonging to a particular team
  getDeveloper(developer): Observable<any> {
    return this.http
      .get(`${apiUrl}/users?id=${developer}`)
      .pipe(delay(apiDelay))
      .pipe(catchError((err) => handleHttpError(err)));
  }
}
