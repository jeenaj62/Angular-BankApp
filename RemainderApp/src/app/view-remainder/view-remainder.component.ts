import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-view-remainder',
  templateUrl: './view-remainder.component.html',
  styleUrls: ['./view-remainder.component.css']
})
export class ViewRemainderComponent implements OnInit {
 remainders:any
 uid:any
  constructor(public ds:DataService) {
    this.uid=localStorage.getItem("currentUser")
   this.ds.getRemainder(this.uid)
   .subscribe((result:any)=>{
    if(result){
     // console.log(result.remainders)
      this.remainders=result.remainder
    }
  },
  (result)=>{
    alert(result.error.message)
  }
  )
 // console.log(this.remainders);
  
}
   

  ngOnInit(): void {
  }

}
