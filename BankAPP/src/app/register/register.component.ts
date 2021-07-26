import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  pswd=""
  registerForm=this.fb.group({
    acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9A-Za-z]*')]]
  })
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    if(this.registerForm.valid){
    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;
    var result=this.ds.register(acno,uname,pswd)
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
