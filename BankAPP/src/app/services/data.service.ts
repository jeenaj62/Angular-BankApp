import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const options={
  withCredentials:true
}
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

  constructor(private http:HttpClient) { 
    // this.getDetails()
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
  getTranscation(acno:any){
    const data={
      acno  
     }
    return this.http.post(environment.apiUrl+"/transcation",data,options)
  }
  register(acno:any,uname:any,password:any){
   const data={
     acno,
     uname,
     password
   }
   return this.http.post(environment.apiUrl+"/register",data)
  }
  Withdraw(acno:any,pswd:any,amt:any){
    const data={
      acno,
      pswd,
      amt 
     }
     return this.http.post(environment.apiUrl+"/withdraw",data,options)  
   }
  deposit(acno:any,pswd:any,amt:any){
    const data={
      acno,
      pswd,
      amt 
     }
     return this.http.post(environment.apiUrl+"/deposit",data,options)
   }
  Login(acno:any,pswd:any){
  const data={
   acno,
   pswd  
  }
  return this.http.post(environment.apiUrl+"/login",data,options)
  }
  deleteAcc(acno:any){
    return this.http.delete(environment.apiUrl+"/deleteAcc/"+acno,options)
  }
  }
  

