import { Component, OnInit } from '@angular/core';
import { JobResult } from '../jobResults';
import { JOBRESULTS } from '../mock-jobs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.sass']
})
export class JobsComponent implements OnInit {
  jobs = JOBRESULTS;
  selectedJob: JobResult;
  
  constructor() { 


  }

  ngOnInit() { 

  }

  

  
}
