import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const options={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUid=""
  currentUser=""
user:any={
1:{uid:1,uname:"Jeena",password:"jeena123",event:[]},
2:{uid:2,uname:"Anu",password:"anu123",event:[]},
3:{uid:3,uname:"Ashna",password:"ash123",event:[]},
4:{uid:4,uname:"Anju",password:"anju123",event:[]},
5:{uid:5,uname:"Jeeva",password:"jeeva123",event:[]},    
}

  constructor(private http:HttpClient) {
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
  getRemainder(uid:any){
    const data={
      uid  
     }
    return this.http.post(environment.apiUrl+"/remainder",data,options)
  }
 
  register(uid:any,uname:any,password:any){
    const data={
      uid,
      uname,
      password
    }
    return this.http.post(environment.apiUrl+"/register",data)
   }
   Login(uid:any,password:any){
    const data={
     uid,
     password  
    }
    return this.http.post(environment.apiUrl+"/login",data,options)
    }
  
  
  Addremainder(event:any,date:any){
    const data={
      event,
      date  
     }
     return this.http.post(environment.apiUrl+"/event",data,options)
     }
  }
