import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { User } from '../../../interfaces/user';
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

 correctPasswords: boolean = true;

  constructor() { 
    
   /*  this.form = this.fb.group({
      password: ['pene',
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]
    }) */
  }

  ngOnInit(): void {
  }

  signup(){
    console.log('llega');
  }

  comparePass(searchValue: string) {  
    if(this.user.password != this.confirmPass) 
      this.correctPasswords = false;
    else this.correctPasswords = true;

  }

  verifyPass(searchValue: String){
    console.log("llega")
  }


}
