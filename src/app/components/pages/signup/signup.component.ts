import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';
import * as moment from 'moment';
import { SuperffService } from '../../../services/superff.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

user: User = {
  first_name: null,
  last_name: null,
  email: null,
  password: null,
  born_date: null  
};
confirmPass: String;

year: String;
month: String = '0';
day: String;

loading: boolean;
registered: boolean;
emailTaken: boolean;
error: boolean;
responseMessage: string;


 correctPasswords: boolean = true;
 invalidDate: boolean = false;
 
  constructor(private superffservice: SuperffService) {
    this.loading = false;
    this.registered = false;
    this.error = false;
    this.emailTaken = false;
    this.responseMessage = null;
    /* const date = moment("2016-12-19");
    console.log('MOMENT: ', date); 
    if (date.isValid()){console.log('es valida')}else{console.log('no es valida')} */
    
   /*  this.form = this.fb.group({
      password: ['pene',
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]
    }) */
  }

  ngOnInit(): void {
  }

  signup(){
    if(this.fechaValida()){
      this.invalidDate = false;
      this.superffservice.signup(this.user).subscribe((data: any)=>{
        this.registered = true;
        this.responseMessage = data.response;
      }, (error)=>{
        if(error.error.response == "This email is already registered"){
          this.emailTaken = true;
          this.responseMessage = error.error.response
        }else{
        this.error = true;
        this.responseMessage = error.error.response;
        }
      });
      
    }else{
      this.invalidDate = true;
    }
  }

  comparePass(searchValue: string) {  
    if(this.user.password != this.confirmPass) 
      this.correctPasswords = false;
    else this.correctPasswords = true;

  }

  verifyPass(searchValue: String){
    console.log("llega")
  }

  fechaValida(): boolean{
    const date = moment(`${this.year}-${this.month}-${this.day}`);
    console.log('born date: ', date);
    if(date.isValid()){
      this.user.born_date = `${this.year}-${this.month}-${this.day}`;
      return true;
    }
    return false;
  }


}
