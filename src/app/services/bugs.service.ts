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

  addBug(bug): Observable<any> {
    return this.http
      .post(
        `${publicApiUrl}/bug/addbug`,
        { ...bug },
        httpOptions({ HttpHeaders })
      )
      .pipe(catchError((err) => handleHttpError(err)))
      .pipe(delay(apiDelay));
  }

  getAllBugs(): Observable<any> {
    return this.http
      .get(`${publicApiUrl}/bug`)
      .pipe(catchError((err) => handleHttpError(err)));
  }

  getBugs(page: number = 0): Observable<any> {
    return this.http.get(`${publicApiUrl}/bug/pages?page=${page}`).pipe(
      catchError((err) =>
        handleHttpError({
          appAlert: this.appAlert,
          message: 'Unable to fetch bugs',
          err,
        })
      )
    );
  }

  getBug(id): Observable<any> {
    http: return this.http
      .get(`${publicApiUrl}/bug/${id}`)
      .pipe(catchError((err) => handleHttpError(err)));
  }

  // getDailyBugReport(): Observable<any> {
  //   return this.http
  //     .get(`${localApiUrl}/dailyBugReport`)
  //     .pipe(catchError((err) => handleHttpError(err)));
  // }

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
