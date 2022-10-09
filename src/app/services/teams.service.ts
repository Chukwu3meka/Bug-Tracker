import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { handleHttpError } from '../libs/commonFunction';
import { apiUrl } from '../libs/appConstants';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    return this.http
      .get(`${apiUrl}/teams`)
      .pipe(catchError((err) => handleHttpError(err)));
  }
}
