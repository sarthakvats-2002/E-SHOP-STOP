import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public commonService :CommonService,private router: Router) { }

  ngOnInit(): void {
  }

  login = (type :any) =>{
    this.commonService.loginType =type;
    this.commonService.signThroughHeader = false
    this.commonService.userlogin();
    if(type == 'logout')
    this.router.navigateByUrl('dashboard');
  }

  checkSignUp() {
    let url = window.location.href;
    if (url.includes("main-dashboard")) {
      return true;
    }
    return false;
  }

}
