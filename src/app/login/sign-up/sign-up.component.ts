import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public commonService : CommonService,private router: Router) { }

  ngOnInit(): void {
  }

  navigateToSignIn = ()=>{
    this.router.navigateByUrl('login/sign-in');
  }

}
