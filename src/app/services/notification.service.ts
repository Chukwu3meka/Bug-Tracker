import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { handleHttpError } from '../libs/commonFunction';
import { localApiUrl } from '../libs/appConstants';

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
