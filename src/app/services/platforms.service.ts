import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { httpOptions } from '../source/commonFunction';
import { localApiUrl, publicApiUrl } from '../source/appConstants';
import { SetAlertAction } from '../store/actions/alert.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Injectable({
  providedIn: 'root',
})
export class PlatformsService {
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

  getPlatforms(): Observable<any> {
    return this.http
      .get(
        `${publicApiUrl}/platforms/activeplatforms`,
        httpOptions({ HttpHeaders })
      )
      .pipe(catchError((err) => this.handleHttpError(err, 'An Error Occured')));
  }
  // this.appAlert(err))

  // return this.http.get(url, httpOptions);

  // // getDevelopers(platform): Observable<any> {
  // getDevelopers(platform): Observable<any> {
  //   const a = of(
  //     // return this.http
  //     this.http.get(`${localApiUrl}/teams`).subscribe((teams: any) => {
  //       const { id: teamId } = teams?.find((x) =>
  //         x.platforms.includes(platform)
  //       );

  //       return this.http
  //         .get(`${localApiUrl}/users?team=${teamId}`)
  //         .pipe(catchError((err) => handleHttpError(err)))
  //         .subscribe((developers) => of(developers));
  //     })
  //   );

  //   return a;
  // }
}
