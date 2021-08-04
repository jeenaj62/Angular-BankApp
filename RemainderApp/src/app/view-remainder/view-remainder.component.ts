import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-view-remainder',
  templateUrl: './view-remainder.component.html',
  styleUrls: ['./view-remainder.component.css']
})
export class ViewRemainderComponent implements OnInit {
 remainders:any
  constructor(public ds:DataService) {
    this.remainders=this.ds.getRemainder()
   }

  ngOnInit(): void {
  }

}
