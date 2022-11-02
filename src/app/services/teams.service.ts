import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { apiDelay, localApiUrl, publicApiUrl } from '../source/appConstants';
import { SetAlertAction } from '../store/actions/alert.actions';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
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

  getTeams(): Observable<any> {
    return (
      this.http
        .get(`${localApiUrl}/teams`)
        // .get(`${publicApiUrl}/teams/allteams`)
        // .pipe(delay(apiDelay))
        .pipe(
          catchError((err) => this.handleHttpError(err, 'An Error Occured'))
        )
    );
  }

  // getTeamIdFrom(): Observable<any> {

  //   this.http.get(`${localApiUrl}/teams`).subscribe((teams: any) => {
  //     const { id: teamId } = teams?.find((x) =>
  //       x.platforms.includes(platform)
  //     );

  //   return this.http
  //     .get(`${localApiUrl}/teams`)
  //     .pipe(catchError((err) => handleHttpError(err)));
  // }
}
