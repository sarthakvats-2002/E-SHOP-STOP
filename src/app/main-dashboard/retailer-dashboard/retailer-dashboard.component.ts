import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retailer-dashboard',
  templateUrl: './retailer-dashboard.component.html',
  styleUrls: ['./retailer-dashboard.component.css']
})
export class RetailerDashboardComponent implements OnInit {
  show: boolean =false;
  typeOfCommand: String ='';
  showRemoved: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  command(type: any){
    this.show= false;
    this.showRemoved = false
    this.typeOfCommand = type
  }
  added(){
    this.show= true
  }
  removed(){
    this.showRemoved = true
  }

}
