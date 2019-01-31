import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //apiUrl = 'http://jsonplaceholder.typicode.com/users';
  apiUrl = '/ads/apisearch?publisher=6992485343911252&q=java&l=austin%2C+tx&format=json&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=96.37.86.16&useragent=Mozilla/%2F4.0%28Firefox%29&v=2';

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<User[]>(this.apiUrl);
  }
}
