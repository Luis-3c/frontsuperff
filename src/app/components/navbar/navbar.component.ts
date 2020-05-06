import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const element = document.querySelector('.navbar');
    if (number > 100) {
      console.log('You are 100px from the top to bottom');
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }

  }



}
