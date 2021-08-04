import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  uid=""
  pass=""
  registerForm=this.fb.group({
    uid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pass:['',[Validators.required,Validators.pattern('[0-9A-Za-z]*')]]
  })
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  Register(){
    if(this.registerForm.valid){
    var uname=this.registerForm.value.uname;
    var uid=this.registerForm.value.uid;
    var pass=this.registerForm.value.pass;
    var result=this.ds.register(uid,uname,pass)
    if(result){
      alert("Register Sucessfully")
      this.router.navigateByUrl("")
    }
    else{
      alert("User Exists!!!! Please Log In")
      this.router.navigateByUrl("")
    }
  }
  else{
    alert("Invalid Forms");
  }
 }

}

