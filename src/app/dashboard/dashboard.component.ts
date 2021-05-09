import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public commonService : CommonService,private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(customerType : any){
    this.commonService.customerType = customerType
    if(this.commonService.loginType == 'SignIn')
    this.router.navigateByUrl('login/sign-in');
    if(this.commonService.loginType == 'SignUp')
    this.router.navigateByUrl('login/sign-up');
  }

}
