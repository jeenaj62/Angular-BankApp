import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  uid=""
  pass=""
  event=" "
  
  remForm=this.fb.group({
    uid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    event:['',[Validators.required,Validators.pattern('[A-Za-z]*')]]
  })

 // user=this.ds.currentUser
    constructor(private ds:DataService,private fb:FormBuilder) { }
  
    ngOnInit(): void {
    }
    user=this.ds.currentUser
    AddRemainder(){
      if(this.remForm.valid){
        var uid=this.remForm.value.uid
        var pass=this.remForm.value.pass
        var event=this.remForm.value.event
        var result=this.ds.Addremainder(uid,pass,event)
        if(result){
         alert("Remainder Added Sucessfull")
        }
      }
    else{
      alert("Invalid Forms")
    }
     
    }
    
  
  }