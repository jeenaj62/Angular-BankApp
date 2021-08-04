import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUid=""
  currentUser=""
user:any={
1:{uid:1,uname:"Jeena",password:"jeena123",remainder:[]},
2:{uid:2,uname:"Anu",password:"anu123",remainder:[]},
3:{uid:3,uname:"Ashna",password:"ash123",remainder:[]},
4:{uid:4,uname:"Anju",password:"anju123",remainder:[]},
5:{uid:5,uname:"Jeeva",password:"jeeva123",remainder:[]},    
}

  constructor() {
    this.getDetails()
   }
  saveDetails(){
    localStorage.setItem("user",JSON.stringify(this.user))
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
      }
    if(this.currentUid){
      localStorage.setItem("currentUid",JSON.stringify(this.currentUid))
      }
  }
  getDetails(){
    if(localStorage.getItem("user")){
    this.user=JSON.parse(localStorage.getItem("user") || '')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '')
    }
    if(localStorage.getItem("currentUid")){
      this.currentUid=JSON.parse(localStorage.getItem("currentUid") || '')
    }
   
  }
  getRemainder(){
    return this.user[this.currentUid].remainder
  }
  register(uid:any,uname:any,password:any){
    let accDetails=this.user
    if(uid in accDetails){
      return false;
    }
    else{
      accDetails[uid]={
        uid,
        uname,
        password,
        remainder:[]
      }
      
      this.saveDetails()
      return true
    }
  }
  Login(uid:any,pass:any){
    let accDetails=this.user
    if(uid in accDetails)
    {
      if(pass == accDetails[uid]["password"]){  
        this.currentUser=accDetails[uid]["uname"] 
        this.currentUid=uid 
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
  
  Addremainder(uid:any,pass:any,event:any){
    let accDetails=this.user
   if(uid in accDetails){
    if(pass == accDetails[uid]["password"]){

    accDetails[uid].remainder.push({
        event:event,
       date:"30-07-2021"
     })
      this.saveDetails()
      return accDetails[uid].remainder
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
