import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { handleHttpError } from '../libs/commonFunction';
import { apiDelay, apiUrl } from '../libs/appConstants';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    return this.http
      .get(`${apiUrl}/teams`)
      .pipe(delay(apiDelay))
      .pipe(catchError((err) => handleHttpError(err)));
  }

  // getTeamIdFrom(): Observable<any> {

  //   this.http.get(`${apiUrl}/teams`).subscribe((teams: any) => {
  //     const { id: teamId } = teams?.find((x) =>
  //       x.platforms.includes(platform)
  //     );

  //   return this.http
  //     .get(`${apiUrl}/teams`)
  //     .pipe(catchError((err) => handleHttpError(err)));
  // }
}
