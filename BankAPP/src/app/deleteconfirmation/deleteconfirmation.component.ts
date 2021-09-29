import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deleteconfirmation',
  templateUrl: './deleteconfirmation.component.html',
  styleUrls: ['./deleteconfirmation.component.css']
})
export class DeleteconfirmationComponent implements OnInit {
  @Input() item:string|undefined
  @Output() onDelete=new EventEmitter
  @Output() onCancel=new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.onDelete.emit(this.item)
    alert("Deleting....")
  }
  cancel(){
    this.onCancel.emit()
    alert("Cancelling....")
  }

}
