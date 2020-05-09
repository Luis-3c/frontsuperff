import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 name1: String;
 name2: String;
 email: String;
 pass1: String;
 pass2: String;

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
    if(this.pass1 != this.pass2) 
      this.correctPasswords = false;
    else this.correctPasswords = true;

  }

  verifyPass(searchValue: String){
    console.log("llega")
  }


}
