import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

age:any='';

  ngOnInit(): void {
  }
  id=""
  name=""
  dob=""
  clg=""
  mail=""
  percent=""

  idget=""
  nameget=""
  dobget=""
  clgget=""
  mailget=""
  percentget=""
 
ill ="";
email ="";

  subname(){
   
    this.id = this.idget;
    this.name = this.nameget;
    this.dob = this.dobget;
    this.clg = this.clgget;
    this.mail = this.mailget;
    this.percent = this.percentget
  }
  clearname(){
   
      this.idget=""
      this.nameget=""
      this.clgget=""
      this.percentget=""
      this.mailget=""
      this.clgget=""

  }

  func() {
    this.ill = this.email;
  }

  text="";
  textss ="";


  slk() {
    this.text = this.textss;
  }

  empl={
    email:''
  };



}
