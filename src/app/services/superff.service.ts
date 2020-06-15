import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperffService {

  readonly API_URL = "https://superflyfitnessapi.herokuapp.com";

  constructor(private http: HttpClient) { }

  // user services
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

  newPassReq(userdata){
    const headers = new HttpHeaders({'Content-Type': 'Application/json'});
    return this.http.post(this.API_URL + '/newpassreq', userdata, {headers: headers});
  }

  setNewPass(userdata, token){
    const headers = new HttpHeaders({'Content-Type': 'Application/json'});
    return this.http.post(this.API_URL + '/setnewpass/' + token, userdata, {headers: headers});
  }

  //subscription services
  subscription(){
    return this.http.get(this.API_URL + '/subscription');
  }

  subscribe(userData){
    const headers = new HttpHeaders({'Content-Type': 'Application/json'});
    return this.http.post(this.API_URL + '/subscribe', userData, {headers: headers});
  }

  getCustomInfo(){
    return this.http.get(this.API_URL + '/custominfo');
  }

  updatePayInfo(customData){
    const headers = new HttpHeaders({'Content-Type':'Application/json'});
    return this.http.post(this.API_URL + '/customcardupdate', customData, {headers: headers});
  }

  //videos services
  getvideosIndex(){
    return this.http.get(this.API_URL + '/videos/index');
  }

  getvideo(id){
    return this.http.get(this.API_URL + '/video/' + id);
  }

  loadmorevideosindex(lastid){
    return this.http.get(this.API_URL + '/videos/index/load/' + lastid);
  }

  getvideosrecommend(){
    return this.http.get(this.API_URL + '/videos/recommend');
  }

  searchvideos(searcher){
    const headers = new HttpHeaders({'Content-Type': 'Application/json'});
    return this.http.post(this.API_URL + '/videos/index/results', searcher, {headers: headers});
  }
}

