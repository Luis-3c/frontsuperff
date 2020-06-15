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

  fullAccess : boolean;
  userStatus: string;

  constructor(private superffservice: SuperffService){
    this.getUserInfo();
  }

  getUserInfo(){
    console.log('llega a userinfo');
    if (this.checkLogged()){
      console.log('fullaccess: ', this.fullAccess)
      this.superffservice.getUserInfo().subscribe((data: userInfo)=>{
        console.log('llega user info');
        this.userinfo = data;
        console.log(this.userinfo);
        this.loadPage();
      }, (error) => {
        if(error.status === 401){
          localStorage.removeItem('token');
        }
      });
    }else {
      this.fullAccess = false;
    }
  }

  //manda llamar el servicio para saber si el usuario esta o no suscrito
//y asi saber que pantallas mostrar
  loadPage(){
    console.log('llega a load page')
    this.superffservice.subscription().subscribe((data: any)=>{
      if(data.response === 'stop' || data.rol === 1){// cuando el servicio regresa un continue significa que el usuario no está suscrito
        this.fullAccess = true;
        this.userStatus = data.status;
      }else{
        this.fullAccess = false;
        this.userStatus = data.status;
      }
    }, (error)=>{
      if(error.status === 401){
        localStorage.removeItem('token');
        this.fullAccess = false;
      }
    });
    //return this.fullAccess;
  }

    checkLogged(): boolean{
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

