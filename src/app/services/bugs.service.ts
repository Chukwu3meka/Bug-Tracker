import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
// import { colors } from 'libs/constants';
import { Observable, throwError, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { apiDelay, apiUrl } from '../libs/appConstants';
import { handleHttpError, httpOptions } from '../libs/commonFunction';

@Injectable({
  providedIn: 'root',
})
export class BugsService {
  constructor(private http: HttpClient) {}

  getBug(id): Observable<any> {
    return this.http
      .get(`${apiUrl}/bugs?id=${id}`)
      .pipe(delay(apiDelay))
      .pipe(catchError((err) => handleHttpError(err)));
  }

  getAllBugs(): Observable<any> {
    return this.http
      .get(`${apiUrl}/bugs`)
      .pipe(catchError((err) => handleHttpError(err)));
  }

  //       bug/pages?page=${}`,
  getBugs(page: number = 1): Observable<any> {
    return this.http
      .get(`${apiUrl}/bugs?_page=${page}&_limit=20`)
      .pipe(delay(apiDelay))
      .pipe(catchError((err) => handleHttpError(err)));
  }

  getDailyBugReport(): Observable<any> {
    return this.http
      .get(`${apiUrl}/dailyBugReport`)
      .pipe(catchError((err) => handleHttpError(err)));
  }

  assignDeveloperToBug({ developer, bug }): Observable<any> {
    console.log({ developer, bug });
    this.http.patch(
      `${apiUrl}/bugs/${bug}`,
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
