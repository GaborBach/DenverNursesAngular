import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { JobResult } from './jobResults';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobsUrl = 'api/jobResults';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET jobs from the server */
  getJobs (): Observable<JobResult[]> {
    return this.http.get<JobResult[]>(this.jobsUrl);
  }
  
}
