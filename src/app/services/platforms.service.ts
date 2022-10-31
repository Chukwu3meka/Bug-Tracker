import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { handleHttpError, httpOptions } from '../source/commonFunction';
import { localApiUrl, publicApiUrl } from '../source/appConstants';

@Injectable({
  providedIn: 'root',
})
export class PlatformsService {
  constructor(private http: HttpClient) {}

  getPlatforms(): Observable<any> {
    return this.http
      .get(
        // .get(`${localApiUrl}/platforms`)
        `${publicApiUrl}/platforms/activeplatforms`,
        httpOptions({ HttpHeaders })
      )
      .pipe(catchError((err) => handleHttpError(err)));

    // return this.http.get(url, httpOptions);
  }

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
