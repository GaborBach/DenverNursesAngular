import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JobResult } from './jobResults';
// import { JOBRESULTS } from './mock-jobs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobsUrl = 'api/jobs';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }



  /** GET jobs from the server */
  // getJobs (): Observable<JobResult[]> {
  //   return this.http.get<JobResult[]>(this.jobsUrl);
  // }
}
