import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your Banking Partner"
 

  acno="Please enter account number"
  pswd=""


  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
 
  
  Login(){
    var acno=this.acno;
    var pswd=this.pswd;
    var result=this.ds.Login(acno,pswd)
    if(result){
      this.router.navigateByUrl("dashboard")
    }
    else{
      this.router.navigateByUrl("")
    }
    
}
}