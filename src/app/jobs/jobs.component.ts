import { Component, OnInit } from '@angular/core';
import { JobResult } from '../jobResults';
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.sass']
})
export class JobsComponent implements OnInit {

  jobResults: JobResult[];


  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobs()
    .subscribe(jobResults => this.jobResults = jobResults);
  }
}
