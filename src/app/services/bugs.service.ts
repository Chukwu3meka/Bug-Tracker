import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
// import { colors } from 'libs/constants';
import { Observable, throwError, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import {
  apiDelay,
  basicAuth,
  localApiUrl,
  publicApiUrl,
} from '../libs/appConstants';
import { handleHttpError, httpOptions } from '../libs/commonFunction';
import { SetAlertAction } from '../store/actions/alert.actions';
import { AppState } from '../store/app.state';

@Injectable({
  providedIn: 'root',
})
export class BugsService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  private appAlert = ({ message, status }) =>
    this.store.dispatch(
      SetAlertAction({ payload: { message, status, hidden: false } })
    );

  // addBug(bug): Observable<any> {
  //   console.log(basicAuth);
  //   return this.http
  //     .post(
  //       // .get(`${localApiUrl}/platforms`)
  //       `${publicApiUrl}/bug/addbug`,
  //       bug,
  //       httpOptions({ HttpHeaders })
  //     )

  //     .pipe(
  //       catchError((err) =>
  //         handleHttpError({
  //           appAlert: this.appAlert,
  //           message: 'Error adding bug',
  //           err,
  //         })
  //       )
  //     );
  //   // "label":"this.formData.bugTitle",
  //   // "bugReview":"this.formData.description",

  //   // return this.http.get(url, httpOptions);
  // }

  addBug(bug): Observable<any> {
    console.log(bug);
    return (
      this.http
        // .get(`${localApiUrl}/users?email=${email}&password=${password}`)
        .post(
          `${publicApiUrl}/bug/addbug`,
          {
            ...bug,
          },
          httpOptions({ HttpHeaders })
        )
        .pipe(catchError((err) => handleHttpError(err)))
        .pipe(delay(apiDelay))
    );
  }

  getBug(id): Observable<any> {
    return this.http
      .get(`${localApiUrl}/bugs?id=${id}`)
      .pipe(delay(apiDelay))
      .pipe(catchError((err) => handleHttpError(err)));
  }

  getAllBugs(): Observable<any> {
    return this.http
      .get(`${localApiUrl}/bugs`)
      .pipe(catchError((err) => handleHttpError(err)));
  }

  //       bug/pages?page=${}`,
  getBugs(page: number = 1): Observable<any> {
    return this.http
      .get(`${localApiUrl}/bugs?_page=${page}&_limit=20`)
      .pipe(delay(apiDelay))
      .pipe(catchError((err) => handleHttpError(err)));
  }

  getDailyBugReport(): Observable<any> {
    return this.http
      .get(`${localApiUrl}/dailyBugReport`)
      .pipe(catchError((err) => handleHttpError(err)));
  }

  assignDeveloperToBug({ developer, bug }): Observable<any> {
    console.log({ developer, bug });
    this.http.patch(
      `${localApiUrl}/bugs/${bug}`,
      {
        a: 'ddd',
        //
        // developer: { ...developer },
      },
      httpOptions({ HttpHeaders })
    );

    return of('success').pipe(delay(apiDelay));
  }
}
