import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor-dashboard',
  templateUrl: './sponsor-dashboard.component.html',
  styleUrls: ['./sponsor-dashboard.component.css']
})
export class SponsorDashboardComponent implements OnInit {
  show: boolean =false;

  constructor() { }

  ngOnInit(): void {
  }

  addChallenge (){
    this.show = true
  }

}
