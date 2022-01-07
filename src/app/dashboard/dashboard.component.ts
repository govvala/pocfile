import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { ApiService } from '../users/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
    public user=[];
  constructor(private http:HttpClient,private apiservice: ApiService) {}
  
  userData:any=[];

  ngOnInit():void  {
    this.apiservice.getUser()
        .subscribe((data) =>{
          console.log(data);
          this.userData=data;
        } );
    
     
      
      
    }
  }




