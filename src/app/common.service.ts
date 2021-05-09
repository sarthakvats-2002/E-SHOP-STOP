import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  signThroughHeader: Boolean = false;
  loginType : String ='';
  customerType : String =''

  constructor() { }

  userlogin(){
    this.signThroughHeader = !this.signThroughHeader;
  }
}
