import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transcation',
  templateUrl: './transcation.component.html',
  styleUrls: ['./transcation.component.css']
})
export class TranscationComponent implements OnInit {
  transcations:any

  constructor(public ds:DataService) { 
    this.transcations=this.ds.getTranscation()
  }

  ngOnInit(): void {
  }

}
