import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { localApiUrl } from '../source/appConstants';
import { SetAlertAction } from '../store/actions/alert.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  private handleHttpError = (err, message, status = null) => {
    console.log(err);

    this.store.dispatch(
      SetAlertAction({
        payload: {
          message: message || err.message,
          status: status || 'error',
          hidden: false,
        },
      })
    );

    return 'An error occured';
  };

  getNotification(id): Observable<any> {
    return this.http
      .get(`${localApiUrl}/notifications?user=${id}`)
      .pipe(catchError((err) => this.handleHttpError(err, 'An Error Occured')));
  }
}
