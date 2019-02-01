import { InMemoryDbService } from 'angular-in-memory-web-api';
import { JobResult } from './jobResults';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const jobResults = [
      { "jobtitle": "Application Engineer", "company": "Google", "city": "Austin", "state": "TX", "country": "US", "language": "en", "formattedLocation": "Austin, TX", "source": "Google", "date": "Sat, 22 Dec 2018 08:20:40 GMT", "snippet": "Programming experience in <b>Java</b>, Spring, Hibernate, Web Services (RESTful, SOAP), JavaScript. When the situation calls for it, you’ll be part of a team that...", "url": "http://www.indeed.com/viewjob?jk=b54c8d06449a5172&qd=NBU7C8GDPZyyJmU4ju9U4nmdfvhTiA75-VMcfpambXwRdIPXjia8Il1dvSZwyXqe5A1XvWCf6fnvV3GS9l2nTNzPssHu4MNMrPYgYPGl9-A&indpubnum=6992485343911252&atk=1d2isdvvlg0p5802", "onmousedown": "indeed_clk(this,'8853');", "latitude": 30.336811, "longitude": -97.75601, "jobkey": "b54c8d06449a5172", "sponsored": false, "expired": false, "indeedApply": false, "formattedLocationFull": "Austin, TX 78731", "formattedRelativeTime": "30+ days ago", "stations": "" }, 

    ];
    return {jobResults};
  }
  constructor() { }
}
