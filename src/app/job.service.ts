import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JobResult } from './jobResults';
import { JOBRESULTS } from './mock-jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  getHeroes(): Observable<JobResult[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(JOBRESULTS);
  }
}
