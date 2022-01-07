import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {   FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Router } from '@angular/router';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ApiService } from './users/api.service';







@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AuthComponent,
    
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
