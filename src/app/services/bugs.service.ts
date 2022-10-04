import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { colors } from 'libs/constants';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bug, DailyBugReport } from '../interface/Old-Bug';
// import db { Bugs } from '../../../db.json';
// import { IPagedContent } from 'src/app/module/global/interface/IPagedContent';
// import { IRestResponse } from 'src/app/module/global/interface/IRestResponse';
// import { environment } from 'src/environments/environment';
// import { IOverdraftExtra } from '../../../dollar-draft/helpers/interface/IOverdraftExtra';
// import { IBidRequestFundingDetailsFX } from '../../../fund-sourcing-allocation/shared/interfaces/IBidRequestFundingDetailsFX';
// import { IForwardToSpotExtra } from '../interfaces/IForwardToSpotExtra';
// import { IPostCollaterised } from '../interfaces/IPostCollaterised';
// import { IPostConversion } from '../interfaces/IPostConversion';
// import { IQualifiedFunding } from '../interfaces/IQualifiedFunding';
// import { IForwardToSpotActivity } from '../interfaces/ISpotActivity';
// import { ISpotConverted } from '../interfaces/ISpotConverted';
// import { ISpotReversal } from '../interfaces/ISpotReversal';
// import { IUpdateSpot } from '../interfaces/IUpdateSpot';

@Injectable({
  providedIn: 'root',
})
export class BugsService {
  // private apiUrl = 'http://localhost:5000';
  private apiUrl = 'http://10.128.32.54:8080/api/v1';

  // force re deployment on server

  // GET_FORWARD_FUNDING_RECORDS_API = environment.gatewayHostApi + '/das/dollar/overdraft/bidrequest/spot';
  // CONVERT_FORWARD_TO_SPOT_API = environment.gatewayHostApi + '/das/dollar/overdraft/convert/spot';
  // GET_SPOT_REJECTED_RECORDS_API = environment.gatewayHostApi + '/das/dollar/overdraft/search/rejection/spot';
  // GET_SPOT_CONVERTED_RECORDS_API = environment.gatewayHostApi + '/das/dollar/overdraft/search/spot/wkflow';
  // GET_CONVERTED_RECORD_API = environment.gatewayHostApi + '/das/dollar/overdraft/attachment/documents/';
  // GET_SPOT_COLLATERISED_RECORDS = environment.gatewayHostApi + '/das/dollar/overdraft/collaterised';
  // APPROVE_CONVERSION_API = environment.gatewayHostApi + '/das/dollar/overdraft/spot/approve';
  // REJECT_CONVERSION_API = environment.gatewayHostApi + '/das/dollar/overdraft/reject/spot';
  // REVERT_SPOT_API = environment.gatewayHostApi + '/das/dollar/overdraft/spot/revert';
  // GET_REVERSAL_RECORD = environment.gatewayHostApi + '/das/dollar/overdraft/record/reverse/';
  // TRADE_POST_RECORD = environment.gatewayHostApi + '/das/dollar/overdraft/reverse/post';
  // updateStatusApi: string = environment.gatewayHostApi + '/das/dollar/overdraft/treasury/review/spot';
  // base: string = "/api/das/dollar/overdraft";
  // SPOT_OVERAGE_SHORTAGE = environment.gatewayHostApi + '/das/dollar/overdraft/shortage/overage';
  // SPOT_POSTED_TRANSACTIONS = environment.gatewayHostApi + '/das/dollar/overdraft/posted/fundings/trade';
  // CANCEL_SPOT_RECORD = environment.gatewayHostApi + '/das/dollar/overdraft/cancel/spot';
  // POST_SPOT_LIQUIDATION = environment.gatewayHostApi + '/das/dollar/overdraft/liquidate' ;

  constructor(private http: HttpClient) {}

  // getBugs() {
  //   // const params = new HttpParams()
  //   //     .set('title', title)
  //   //     .set('year', year.toString());
  //   // return this.http.get<Movie>(this.moviePath, {params})
  //   return this.http.get<>(`${this.apiUrl}/bug/pages`);
  // }

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };

  // update(id, title, content) {
  //   const updateData = { id: id, title: title, content: content };
  //   return this.http.put(`http://myurl/${id}`, updateData, httpOptions);
  // }

  getBugs(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:
          'Basic ' + btoa('donaldwisdomnengi@gmail.com:Cassillas1nengi!'),
      }),
    };

    // const headers_object = new HttpHeaders();
    // headers_object.append('Content-Type', 'application/json');
    // headers_object.append(
    //   'Authorization',
    //   'Basic ' + btoa('donaldwisdomnengi@gmail.com:Cassillas1nengi!')
    // );

    // const httpOptions = {
    //   headers: headers_object,
    // };

    // const params = new HttpParams()
    //     .set('title', title)
    //     .set('year', year.toString());
    // return this.http.get<Movie>(this.moviePath, {params})

    return this.http.get(`${this.apiUrl}/bug/pages`, httpOptions);
    // return this.http.get<Bug[]>(`${this.apiUrl}/bugs`);
  }
  // "assignedTo": null,
  // "bugId": 1,
  // "label": "Wisdom Donald",
  // "createdBy": null,
  // "severity": "LOW",
  // "enumSeverity": null,
  // "ticketId": null,
  // "bugTreatmentStage": "OPEN",
  // "progressStatus": "COMPLETED",
  // "bugReview": "The app no dey works",
  // "platformses": {
  //     "platformId": 1,
  //     "platformName": "Mobile App",
  //     "platformStatus": null
  // },
  // "approvedForReassignment": null
  // }

  // getDailyBugReport(): Observable<DailyBugReport[]> {
  //   return this.http.get<DailyBugReport[]>(`${this.apiUrl}/dailyBugReport`);
  // }

  // getForwardFundingRecords(
  //   params: HttpParams
  // ): Observable<IRestResponse<IQualifiedFunding[]>> {
  //   return this.http
  //     .get<IRestResponse<IQualifiedFunding[]>>(
  //       this.GET_FORWARD_FUNDING_RECORDS_API,
  //       { params }
  //     )
  //     .pipe(catchError((err) => this.handleHttpError(err)));
  // }

  // convertForwardToSpot(fundingRecords: any): Observable<IRestResponse<any>> {
  //   return this.http.post<IRestResponse<any>>(this.CONVERT_FORWARD_TO_SPOT_API, fundingRecords)
  //     .pipe(
  //       catchError(err => this.handleHttpError(err))
  //     );
  // }
  // updateForwardToSpot(fundingRecords: any): Observable<IRestResponse<any>> {
  //   return this.http.put<IRestResponse<any>>(this.REVERT_SPOT_API, fundingRecords)
  //     .pipe(
  //       catchError(err => this.handleHttpError(err))
  //     );
  // }
  // getSpotConvertedRecords(params: HttpParams): Observable<IRestResponse<IPagedContent<ISpotConverted>>> {
  //   return this.http.get<IRestResponse<IPagedContent<ISpotConverted>>>(this.GET_SPOT_CONVERTED_RECORDS_API, { params })
  //     .pipe(
  //       catchError(err => this.handleHttpError(err))
  //     );
  // }
  // getRejectedRecords(params: HttpParams): Observable<IRestResponse<IPagedContent<ISpotConverted>>> {
  //   return this.http.get<IRestResponse<IPagedContent<ISpotConverted>>>(this.GET_SPOT_REJECTED_RECORDS_API, { params }).pipe(
  //     catchError((error) => this.handleHttpError(error))
  //   )
  // }
  // getSpotConvertedRecordDetails(id: string): Observable<IRestResponse<any>> {
  //   return this.http.get<IRestResponse<any>>(this.GET_CONVERTED_RECORD_API + id)
  //     .pipe(
  //       catchError(err => this.handleHttpError(err))
  //     );
  // }
  // approveConversion(convertedRecord: { id: number, workflowId: number }): Observable<IRestResponse<any>> {
  //   return this.http.put<IRestResponse<any>>(this.APPROVE_CONVERSION_API, convertedRecord)
  //     .pipe(
  //       catchError(err => this.handleHttpError(err))
  //     );
  // }
  // rejectConversion(convertedRecord: { id: number, rejectWorkFlow: number, rejectReason: string }): Observable<IRestResponse<any>> {
  //   return this.http.put<IRestResponse<any>>(this.REJECT_CONVERSION_API, convertedRecord)
  //     .pipe(
  //       catchError(err => this.handleHttpError(err))
  //     );
  // }
  // private handleHttpError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
  //   return throwError(error);
  // }
  // parseErrorBlob(err: HttpErrorResponse): Observable<any> {
  //   const reader: FileReader = new FileReader();
  //   const obs = Observable.create((observer: any) => {
  //     reader.onloadend = e => {
  //       observer.error(JSON.parse(reader.result as string));
  //       observer.complete();
  //     };
  //   });
  //   reader.readAsText(err.error);
  //   return obs;
  // }
  // getReversalRecord(id: string): Observable<IRestResponse<ISpotReversal>> {
  //   return this.http.get<IRestResponse<ISpotReversal>>(this.GET_REVERSAL_RECORD + id)
  //     .pipe(
  //       catchError(err => this.handleHttpError(err))
  //     );
  // }
  // postNewNgnEquivalent(tradeRecord: { fundingTransId: number, dollarOverDraftId: number }): Observable<IRestResponse<any>> {
  //   return this.http.put<IRestResponse<any>>(this.TRADE_POST_RECORD, tradeRecord)
  //     .pipe(
  //       catchError(err => this.handleHttpError(err))
  //     );
  // }
  // viewSpotEvent = new EventEmitter<number>();
  // updateSpotStatus(updatedOverdraft: IUpdateSpot): Observable<IRestResponse<any>> {
  //   //console.log(updatedOverdraft)
  //   return this.http.put<IRestResponse<any>>(this.updateStatusApi, updatedOverdraft)
  //     .pipe(
  //       catchError(err => this.handleHttpError(err))
  //     );
  // }
  // getForwardToSpot(params?: HttpParams) {
  //   return this.http.get<IRestResponse<IPagedContent<IOverdraftExtra>>>(`${this.base}/search/spot/wkflow`, { params });
  // }
  // getForwardToSpotActivity(id: string, params?: HttpParams) {
  //   return this.http.get<IRestResponse<IPagedContent<IForwardToSpotActivity>>>(
  //     `${this.base}/activity/${id}`, { params }
  //   );
  // }
  // getSpotOverageShortage(params?: HttpParams): Observable<IRestResponse<any>> {
  //   return this.http.get(this.SPOT_OVERAGE_SHORTAGE, { params });
  // }
  // getPostedRecords(params: HttpParams): Observable<IRestResponse<IPagedContent<IBidRequestFundingDetailsFX[]>>> {
  //   return this.http.get<IRestResponse<IPagedContent<IBidRequestFundingDetailsFX[]>>>(this.SPOT_POSTED_TRANSACTIONS, { params })
  //     .pipe(
  //       catchError(err => this.handleHttpError(err))
  //     );
  // }
  // cancelSPOTrecord(spotId: any): Observable<IRestResponse<any>> {
  //   return this.http.put<IRestResponse<any>>(this.CANCEL_SPOT_RECORD, spotId)
  //     .pipe(
  //       catchError(err => this.handleHttpError(err))
  //     );
  // }
  // getSpotLiquidationRecords(params: HttpParams): Observable<IRestResponse<any>>{
  //   return this.http.get<IRestResponse<any>>(this.GET_SPOT_COLLATERISED_RECORDS, {params}) .pipe(
  //     catchError(err => this.handleHttpError(err))
  //   );
  // }
  // postSpotLiquidation(recordToPost: IPostCollaterised): Observable<IRestResponse<any>> {
  //   return this.http.post<IRestResponse<any>>(this.POST_SPOT_LIQUIDATION, recordToPost)
  //     .pipe(
  //       catchError(err => this.handleHttpError(err))
  //     );
  // }
}
