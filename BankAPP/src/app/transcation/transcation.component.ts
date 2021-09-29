import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transcation',
  templateUrl: './transcation.component.html',
  styleUrls: ['./transcation.component.css']
})
export class TranscationComponent implements OnInit {
  transcations:any
  acno:any
  constructor(public ds:DataService) { 
   this.acno=localStorage.getItem("currentAcc")
   this.ds.getTranscation(this.acno)
    .subscribe((result:any)=>{
      if(result){
        console.log(result.transcation)
        this.transcations=result.transcation
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
    console.log(this.transcations);
    
  }

  ngOnInit(): void {
  }

}
