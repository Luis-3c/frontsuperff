import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../signup/signup.component.css']
})
export class SigninComponent implements OnInit {
  email: String;
  pass1: String;
  constructor() { }

  ngOnInit(): void {
  }

  signin(){
    console.log('SI llega');
  }

}
