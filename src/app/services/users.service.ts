import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { handleHttpError, httpOptions } from '../libs/commonFunction';
import { apiDelay, localApiUrl, publicApiUrl } from '../libs/appConstants';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { SetAlertAction } from '../store/actions/alert.actions';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  private appAlert = ({ message, status }) =>
    this.store.dispatch(
      SetAlertAction({ payload: { message, status, hidden: false } })
    );

  signup({ firstName, lastName, email, password }): Observable<any> {
    return (
      this.http
        // .get(`${localApiUrl}/users?email=${email}&password=${password}`)
        .post(
          `${publicApiUrl}/usersignup/save`,
          {
            firstName,
            lastName,
            email,
            password,
          },
          httpOptions({ HttpHeaders })
        )
        .pipe(catchError((err) => handleHttpError(err)))
        .pipe(delay(apiDelay))
    );
  }

  login({ email, password }): Observable<any> {
    return this.http
      .post(`${publicApiUrl}/usersignin/checkifuserexists`, {
        email,
        password,
      })
      .pipe(
        catchError((err) =>
          handleHttpError({
            appAlert: this.appAlert,
            message: 'Email/Password is incorrect',
            err,
          })
        )
      )
      .pipe(delay(500));

    // .pipe(
    //   // of(

    //     this.appAlert ({ message:"", status:"dsfdsfdfdsf" })
    //     )
    // )

    // .catch((err: HttpErrorResponse) => {
    //   // simple logging, but you can do a lot more, see below
    //   console.error('An error occurred:', err.error);
    // })
  }

  reset(email): Observable<any> {
    this.http
      .get(`${localApiUrl}/users?email=${email}`)
      .subscribe((profile) => {
        if (profile) {
          this.http.patch(
            `${localApiUrl}/users/${profile[0].id}`,
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
      .get(`${localApiUrl}/users?team=${teamId}`)
      .pipe(delay(apiDelay))
      .pipe(catchError((err) => handleHttpError(err)));
  }

  // get developers belonging to a particular team
  getDeveloper(developer): Observable<any> {
    return this.http
      .get(`${localApiUrl}/users?id=${developer}`)
      .pipe(delay(apiDelay))
      .pipe(catchError((err) => handleHttpError(err)));
  }

  // get all developers
  getAllDeveloper(): Observable<any> {
    return this.http
      .get(`${publicApiUrl}/users/getdevelopers`)
      .pipe(delay(apiDelay))
      .pipe(catchError((err) => handleHttpError(err)));
  }
}
