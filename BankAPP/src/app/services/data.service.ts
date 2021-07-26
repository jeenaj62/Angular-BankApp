import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user:any={
    1000:{accno:1000,uname:"jeena",password:"userone",balance:3000},
    1001:{accno:1001,uname:"Anju",password:"usertwo",balance:5000},
    1002:{accno:1002,uname:"Ashna",password:"userthree",balance:6000},
    1003:{accno:1003,uname:"Akhila",password:"userfour",balance:7000}
  }

  constructor() { }
  register(acno:any,uname:any,password:any){
    let accDetails=this.user
    if(acno in accDetails){
      return false;
    }
    else{
      accDetails[acno]={
        acno,
        uname,
        password,
        balance:0
      }
      return true
    }
  }
  Withdraw(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let accDetails=this.user
   if(acno in accDetails){
    if(pswd == accDetails[acno]["password"]){
      if(accDetails[acno]["balance"]>amount){
      accDetails[acno]["balance"]-=amount
      return accDetails[acno]["balance"]
    }
    else{
      alert("Insufficient Balance")
      return false
    }
  }
    else{
      alert("Incorrect Password")
      return false
    }
   }
   else{
    alert("Invalid User")
    return false
   }
   }
  deposit(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let accDetails=this.user
   if(acno in accDetails){
    if(pswd == accDetails[acno]["password"]){
      accDetails[acno]["balance"]+=amount
      return accDetails[acno]["balance"]
    }
    else{
      alert("Incorrect Password")
      return false
    }
   }
   else{
    alert("Invalid User")
    return false
   }
   }
  Login(acno:any,pswd:any){
    let accDetails=this.user
    if(acno in accDetails)
    {
      if(pswd == accDetails[acno]["password"]){
       alert("Login Successful")
       return true
     
      }
      else{
        alert("Incorrect Password")
        return false
      }
    }
    else{
    alert("Invalid User")
    return false
  }
  }
  }
  

