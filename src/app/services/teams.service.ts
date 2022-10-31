import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { handleHttpError } from '../source/commonFunction';
import { apiDelay, localApiUrl, publicApiUrl } from '../source/appConstants';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    return (
      this.http
        .get(`${localApiUrl}/teams`)
        // .get(`${publicApiUrl}/teams/allteams`)
        .pipe(delay(apiDelay))
        .pipe(catchError((err) => handleHttpError(err)))
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
