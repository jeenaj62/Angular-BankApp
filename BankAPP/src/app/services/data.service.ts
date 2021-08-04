import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser=""
  currentAcc=""
  user:any={
    1000:{acno:1000,uname:"jeena",password:"userone",balance:3000,transaction:[]},
    1001:{acno:1001,uname:"Anju",password:"usertwo",balance:5000,transaction:[]},
    1002:{acno:1002,uname:"Ashna",password:"userthree",balance:6000,transaction:[]},
    1003:{acno:1003,uname:"Akhila",password:"userfour",balance:7000,transaction:[]}
  }

  constructor() { 
    this.getDetails()
  }
  saveDetails(){
    localStorage.setItem("user",JSON.stringify(this.user))
    if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    if(this.currentAcc){
      localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))
    }
  }
  getDetails(){
    if(localStorage.getItem("user")){
    this.user=JSON.parse(localStorage.getItem("user") || '')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '')
    }
    if(localStorage.getItem("currentAcc")){
      this.currentAcc=JSON.parse(localStorage.getItem("currentAcc") || '')
    }
  }
  getTranscation(){
    return this.user[this.currentAcc].transaction
  }
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
        balance:0,
        transaction:[]
      }
      //console.log(accDetails);
      
      this.saveDetails()
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
      accDetails[acno].transaction.push({
        amount:amount,
       type:"DEBIT"
     })
     
      this.saveDetails()
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

    accDetails[acno].transaction.push({
        amount:amount,
       type:"CREDIT"
     })
  //  console.log( accDetails[acno].transcation)
      this.saveDetails()
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
      this.currentUser=accDetails[acno]["uname"]
      this.currentAcc=acno
      this.saveDetails()
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
  

