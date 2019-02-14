import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { JobResult } from './jobResults';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobsUrl = 'http://localhost:8000/api/jobResults/';  // URL to web api

  constructor(
    private http: HttpClient) {}

  /** GET jobs from the server */
  getJobs (searchterm: string): Observable<JobResult[]> {
    return this.http.get<JobResult[]>(this.jobsUrl+searchterm)
    .pipe(
      catchError(this.handleError('getJobs', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
