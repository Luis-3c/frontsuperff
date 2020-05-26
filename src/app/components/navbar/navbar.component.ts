import { Component, OnInit, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { userInfo} from '../../interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() userinfo: userInfo;

  constructor(private router: Router, private appcomponent: AppComponent) { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const element = document.querySelector('.navbar');
    if (number > 100) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }

  }

   checkLogged(): Boolean{
    return this.appcomponent.checkLogged();
  }
 
  signOut(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }



}
