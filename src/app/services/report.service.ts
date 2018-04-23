import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Filter, Result} from '../components/report/report.component';

import { Observable } from 'rxjs/Observable';
import {Report} from '../models/report';
import {DatePipe} from '@angular/common';
import {RequestOptions} from '@angular/http';

@Injectable()
export class ReportService {

  constructor(private http: HttpClient) { }

  private BASEURL = 'https://radiology.librehealth.io/lh-toolkit/ws/rest/v1/radiologyreport/';

  getReports(filter: Filter): Observable<Result> {

    // this.header.append();
    const datePipe = new DatePipe('en-US');

    let params = new HttpParams();

    if (filter.fromDate == null || filter.toDate == null) {
      params = params.set('status', filter.status.toString())
        .set('v', 'full');
    } else {
      params = params.set('fromdate', datePipe.transform(filter.fromDate, 'yyyy-MM-dd'))
        .set('todate', datePipe.transform(filter.toDate, 'yyyy-MM-dd'))
        .set('status', filter.status.toString())
        .set('v', 'full');
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic YWRtaW46QWRtaW4xMjM=');
    return this.http.get<Result>(this.BASEURL, {headers, params});
  }

}

