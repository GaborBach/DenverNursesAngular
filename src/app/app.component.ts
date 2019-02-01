import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  ;
  constructor() {}

  ngOnInit() {
    //return this.dataService.getUsers()
    //.subscribe(data => this.users$ = data);
  }
}
