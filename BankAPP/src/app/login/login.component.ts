import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your Banking Partner"
  accnum="Please enter account number"

  acno=""
  pswd=""
  user:any={
    1000:{accno:1000,uname:"jeena",password:"userone",balance:3000},
    1001:{accno:1001,uname:"Anju",password:"usertwo",balance:5000},
    1002:{accno:1002,uname:"Ashna",password:"userthree",balance:6000},
    1003:{accno:1003,uname:"Akhila",password:"userfour",balance:7000}
  }

  constructor() { }

  ngOnInit(): void {
  }
 
  
  Login(a:any,p:any){
    var acno=a.value;
    var pswd=p.value;
    let accDetails=this.user;
    if(acno in accDetails)
    {
      if(pswd == accDetails[acno]["password"]){
       alert("Login Sucessful")
      }
      else{
        alert("Incorrect Password")
      }
    }
    else{
    alert("Invalid User")
  }
  }
}
