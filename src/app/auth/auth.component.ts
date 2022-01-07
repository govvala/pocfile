import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls:['./auth.component.css']
})
export class AuthComponent implements  OnInit{
  public authForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient, private router:Router){}
  
  ngOnInit(): void {
    this.authForm=this.formBuilder.group({
      username:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
     const user= res.find((a:any)=>{
       return a.username=== this.authForm.value.username && a.password === this.authForm.value.password
     });
     if(user){
       this.router.navigate(['dashboard'])
     }else{
       alert("user not found")
     }
    })
  }
  
}






