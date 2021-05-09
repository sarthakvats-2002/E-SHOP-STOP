import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router,public commonService : CommonService) { }

  ngOnInit(): void {
  }

  navigateToDashBoard = ()=>{
    if(this.commonService.customerType == 'retailer')
    this.router.navigateByUrl('main-dashboard/retail-dashboard');
    if(this.commonService.customerType == 'customer')
    this.router.navigateByUrl('main-dashboard/customer-dashboard');
    if(this.commonService.customerType == 'sponsor')
    this.router.navigateByUrl('main-dashboard/sponsor-dashboard');
  }

}
