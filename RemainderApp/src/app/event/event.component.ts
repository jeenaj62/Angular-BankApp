import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  date=""
  event=" "
  
  remForm=this.fb.group({
    date:['',[Validators.required,Validators.pattern('[0-9]*')]],
    event:['',[Validators.required,Validators.pattern('[A-Za-z]*')]]
  })

    constructor(private ds:DataService,private fb:FormBuilder) { }
  
    ngOnInit(): void {
    }
    user=this.ds.currentUser
    AddRemainder(){
      if(this.remForm.valid){
        var date=this.remForm.value.date
        var event=this.remForm.value.event
        this.ds.Addremainder(date,event)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
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
