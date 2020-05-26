import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountv',
  templateUrl: './accountv.component.html',
  styleUrls: ['./accountv.component.css']
})
export class AccountvComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  checkLogged(): Boolean{
    if(localStorage.getItem('token')){
      return true;
    }else return false;
  }

}
