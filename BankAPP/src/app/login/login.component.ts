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
 
  accChange(event:any){
    //console.log(event.target.value);
    this.acno=event.target.value

  }
  pswdChange(event:any){
    this.pswd=event.target.value
  }
  Login(){
    var acno=this.acno;
    var pswd=this.pswd;
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
