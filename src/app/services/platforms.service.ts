import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { handleHttpError } from '../libs/commonFunction';
import { apiUrl } from '../libs/appConstants';

@Injectable({
  providedIn: 'root',
})
export class PlatformsService {
  constructor(private http: HttpClient) {}

  getPlatforms(): Observable<any> {
    return this.http
      .get(`${apiUrl}/platforms`)
      .pipe(catchError((err) => handleHttpError(err)));
  }

  getDevelopers({}): Observable<any> {
    const a = this.http.get(`${apiUrl}/platforms`).subscribe((x) => {});

    return this.http
      .get(`${apiUrl}/platforms`)
      .pipe(catchError((err) => handleHttpError(err)));
  }
}
