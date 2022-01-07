import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { team } from '../interface/team';
import { user } from '../interface/user';




@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  constructor(private http:HttpClient) { }
  getUser():Observable<user[]>{
    return this.http.get<user[]>('http://localhost:3000/userdata');
  }
  getTeam():Observable<team[]>{
    return this.http.get<team[]>('http://localhost:3000/team');
  }

}