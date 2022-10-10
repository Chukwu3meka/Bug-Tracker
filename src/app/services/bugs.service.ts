import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
// import { colors } from 'libs/constants';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiUrl } from '../libs/appConstants';
import { handleHttpError, httpOptions } from '../libs/commonFunction';

@Injectable({
  providedIn: 'root',
})
export class BugsService {
  constructor(private http: HttpClient) {}

  getBug(id): Observable<any> {
    return this.http
      .get(`${apiUrl}/bug/${id}`, httpOptions({ HttpHeaders }))
      .pipe(catchError((err) => handleHttpError(err)));
  }

  getAllBugs(): Observable<any> {
    return this.http
      .get(`${apiUrl}/bugs`, httpOptions({ HttpHeaders }))
      .pipe(catchError((err) => handleHttpError(err)));
  }

  //       bug/pages?page=${}`,
  getBugs(page: number = 1): Observable<any> {
    return this.http
      .get(
        `${apiUrl}/bugs?_page=${page}&_limit=20`,
        httpOptions({ HttpHeaders })
      )
      .pipe(catchError((err) => handleHttpError(err)));
  }

  getDailyBugReport(): Observable<any> {
    return this.http
      .get(`${apiUrl}/dailyBugReport`)
      .pipe(catchError((err) => handleHttpError(err)));
  }
}
