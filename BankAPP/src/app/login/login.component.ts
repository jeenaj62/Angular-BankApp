import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9A-Za-z]*')]]
  })

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
 
  
  Login(){
    if(this.loginForm.valid){
      var acno=this.loginForm.value.acno;
      var pswd=this.loginForm.value.pswd;
      var result=this.ds.Login(acno,pswd)
      if(result){
        this.router.navigateByUrl("dashboard")
      }
      else{
        this.router.navigateByUrl("")
      }
    }
else{
  alert("Invalid Forms")
}
    
}
}