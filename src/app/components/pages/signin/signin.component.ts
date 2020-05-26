import { Component, OnInit } from '@angular/core';
import { SuperffService } from '../../../services/superff.service';
import {userDataLogin, userSignIn} from '../../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../signup/signup.component.css']
})
export class SigninComponent implements OnInit {
  
  user : userSignIn = {
    email: null,
    password: null
  };

  error: boolean;
  errorMessage: String;
  loading: boolean;

  constructor(private superffservice: SuperffService, private router: Router) { }

  ngOnInit(): void {
    this.error = false;
    this.loading = false;
  }

  signin(){
    this.loading = true;
    this.superffservice.signin(this.user).subscribe((data: userDataLogin)=>{
      this.error = false;
      this.loading = false;
      console.log(data);
      localStorage.setItem('token', data.accessToken);
      this.router.navigate(['']);
    }, (error) =>{
      this.error = true;
      this.loading = false;
      this.errorMessage = error.error.response;
    }) 
  }

}
