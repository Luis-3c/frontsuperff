import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperffService {

  readonly API_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }


  signin(user){
    const headers = new HttpHeaders({'Content-Type': 'Application/json'});
    return this.http.post(this.API_URL + '/login', user, {headers: headers});
    
  }

  signup(user){
    const headers = new HttpHeaders({'Content-Type': 'Application/json'});
    return this.http.post(this.API_URL + '/register', user, {headers: headers});
  }

  getUserInfo(){
    return this.http.get(this.API_URL + '/userinfo');
  }

  subscription(){
    return this.http.get(this.API_URL + '/subscription');
  }

  subscribe(userData){
    const headers = new HttpHeaders({'Content-Type': 'Application/json'});
    return this.http.post(this.API_URL + '/subscribe', userData, {headers: headers});
  }
}

