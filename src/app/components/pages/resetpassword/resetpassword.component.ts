import { Component, OnInit } from '@angular/core';
import { userEmail, userResetPass } from '../../../interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { SuperffService } from '../../../services/superff.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['../signup/signup.component.css']
})
export class ResetpasswordComponent implements OnInit {

  userdata : userEmail = {
    email: null
  }

  userdata1 : userResetPass = {
    password: null
  }

  confirmPass: string;
  correctPasswords: boolean = true;
  loading: boolean = false;
  error: boolean = false;
  resetToken: boolean = false;
  success: boolean = false;
  responseMessage: string;
  token: string = null;

  constructor(private route: ActivatedRoute, private sffservice: SuperffService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['token']){
        this.resetToken = true;
        this.token = params['token'];
      }
    });
  }

  sendMail(){
    this.loading = true;
    this.sffservice.newPassReq(this.userdata).subscribe((data:any)=>{
      this.responseMessage = data.response;
      this.success = true;
      this.loading = false;
    },(error)=>{
      this.error = true;
      this.responseMessage = error.error.response;
      this.loading = false;
    });
  }

  resetPassword(){
    this.loading = true;
    this.sffservice.setNewPass(this.userdata1, this.token).subscribe((data:any)=>{
      this.responseMessage = data.response;
      this.success = true;
      this.loading = false;
    },(error)=>{
      this.error = true;
      this.responseMessage = error.error.response;
      this.loading = false;
    });
  }

  comparePass(searchValue: string) {
    if(this.userdata1.password != this.confirmPass){
      this.correctPasswords = false;
    }else this.correctPasswords = true;
  }

}
