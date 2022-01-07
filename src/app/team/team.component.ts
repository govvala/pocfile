import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../users/api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
 public Team=[]
  constructor(private http:HttpClient, private apiservce:ApiService ) { }
  teamdata:any=[]
  ngOnInit(): void {
    this.apiservce.getTeam()
        .subscribe((data) =>{
          console.log(data);
          this.teamdata=data;
        } );

}
}