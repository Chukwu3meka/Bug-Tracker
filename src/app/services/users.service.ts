import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { colors } from 'libs/constants';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bug, DailyBugReport } from '../interface/Old-Bug';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'http://localhost:5000';

  private handleHttpError = (err) => {
    console.log(err);

    return 'error occur';
  };

  constructor(private http: HttpClient) {}

  login({ email, password }): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/users?email=${email}&password=${password}`)
      .pipe(catchError((err) => this.handleHttpError(err)));
  }
}
