import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { handleHttpError } from '../source/commonFunction';
import { localApiUrl } from '../source/appConstants';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  getNotification(id): Observable<any> {
    return this.http
      .get(`${localApiUrl}/notifications?user=${id}`)
      .pipe(catchError((err) => handleHttpError(err)));
  }
}
