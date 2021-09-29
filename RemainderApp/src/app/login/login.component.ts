import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uid="please enter userid"
  pass=""
  loginForm=this.fb.group({
    uid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pass:['',[Validators.required,Validators.pattern('[0-9A-Za-z]*')]]
  })
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }


  ngOnInit(): void {
  }
  Login(){
    if(this.loginForm.valid){
      var uid=this.loginForm.value.uid;
      var pass=this.loginForm.value.pass;
      this.ds.Login(uid,pass)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          localStorage.setItem("userName",result.userName)
          localStorage.setItem("currentUser",result.currentUser)
          this.router.navigateByUrl("dashboard")
        }
      },
      (result)=>{
       alert(result.error.message)
        }
        )
    }
else{
  alert("Invalid Forms")
}
    
}
}