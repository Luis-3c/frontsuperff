import { Component } from '@angular/core';
import { SuperffService } from './services/superff.service';
import { userInfo } from './interfaces/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontsuperff';

  userinfo: userInfo = {
    first_name: null, 
    last_name: null, 
    email: null
  }

  constructor(private superffservice: SuperffService){
    this.getUserInfo();
  }

  getUserInfo(){
    if (this.checkLogged){
      this.superffservice.getUserInfo().subscribe((data: userInfo)=>{
        this.userinfo = data;
        console.log(this.userinfo);
      }, (error) => {
        if(error.status === 401){
          localStorage.removeItem('token');
        }
      });
    }
  }

    checkLogged(): Boolean{
      if(localStorage.getItem('token')){
        return true;
      }else{
        return false;
      }
    }

    getData(): userInfo{
      return this.userinfo;
    }

  }

