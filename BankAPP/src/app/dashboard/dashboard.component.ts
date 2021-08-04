import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

acno=""
pswd=""
amount=" "
acno1=""
pswd1=""
amount1=" "
depositForm=this.fb.group({
  acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9A-Za-z]*')]]
})
withdrawForm=this.fb.group({
  acno1:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  amount1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd1:['',[Validators.required,Validators.pattern('[0-9A-Za-z]*')]]
})
user=this.ds.currentUser
  constructor(private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  deposit(){
    if(this.depositForm.valid){
      var acno=this.depositForm.value.acno
      var pswd=this.depositForm.value.pswd
      var amount=this.depositForm.value.amount
      var result=this.ds.deposit(acno,pswd,amount)
      if(result){
        alert("Amount" +amount+ " credited. New Balance is:"+ result)
      }
    }
  else{
    alert("Invalid Forms")
  }
   
  }
  Withdraw(){
    if(this.withdrawForm.valid){
    var acno=this.withdrawForm.value.acno1
    var pswd=this.withdrawForm.value.pswd1
    var amount=this.withdrawForm.value.amount1
    var result=this.ds.Withdraw(acno,pswd,amount)
    if(result){
      alert("Amount" +amount+ " debited. New Balance is:"+ result)
    }
  }
  else{
    alert("Invalid Forms")
  }
  }

}
