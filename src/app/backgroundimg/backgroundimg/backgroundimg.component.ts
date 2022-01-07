import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backgroundimg',
  templateUrl: './backgroundimg.component.html',
  styleUrls: ['./backgroundimg.component.css']
})
export class BackgroundimgComponent implements OnInit {

  backimg : string = "../assets/images/angular-img.jpg";

  constructor() { }

  ngOnInit() {
  }

}
