import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { StripeService, Elements, Element as StripeElement, ElementsOptions, Token} from 'ngx-stripe';
import { SuperffService } from 'src/app/services/superff.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { userInfo } from '../../../interfaces/user';
import { error } from 'protractor';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  elements: Elements;
  card: StripeElement;
  elementOptions: ElementsOptions = {
    locale: 'en'
  };

  stripeTest: FormGroup;

  clientData: {
    token: Token, 
    email: String
  }


  userinfo: userInfo = {
    first_name: null,
    last_name: null, 
    email: null
  };
  
  loadingPage: boolean;
  responseMessage: string;
  error: boolean;
  success: boolean;

  constructor(private fb:FormBuilder, private StripeSvc: StripeService, private superffservice: SuperffService, private router: Router, private appcomponent: AppComponent) { 
    this.clientData = {
      token: null,
      email: null
    }
    //this.loadPage();
  }

  ngOnInit(): void {
    this.loadingPage = true;
    this.error = false;
    this.success = false;
    this.responseMessage = null;
    this.loadPage();
    this.stripeTest = this.fb.group({
      name: ['',Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });
  }

  buy(){
    this.loadingPage = true;
    const name= this.stripeTest.get('name').value;
    const email = this.stripeTest.get('email').value;
    this.StripeSvc.createToken(this.card, {name}).subscribe((result)=>{
      if(result.token){
        this.clientData.token = result.token;
        this.clientData.email = email;
        this.superffservice.subscribe(this.clientData).subscribe((data: any)=>{
          this.loadingPage = false;
          this.success = true;
          this.responseMessage = data.response;
        }, (error)=>{
          this.loadingPage = false;
          this.error = true;
          this.responseMessage = error.error.message;
        });
      }else if(result.error){
        this.loadingPage = false;
        this.error = true;
        this.responseMessage = result.error.message;
      }
    })
  }

  loadPage(){
    this.superffservice.subscription().subscribe((data: any)=>{
      if(data.response == 'stop'){
        this.router.navigate(['']);
      }else{
        this.loadingPage = false;
      this.userinfo = this.appcomponent.getData();
      this.stripeTest.setValue({name: `${this.userinfo.first_name} ${this.userinfo.last_name}`, email: this.userinfo.email});
      this.StripeSvc.elements(this.elementOptions).subscribe((elements)=>{
        this.elements = elements;
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#141212'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
      }
      
    }, (error)=>{
      if(error.status === 401){
        if(localStorage.getItem('token')){
          localStorage.removeItem('token');
        }
        this.router.navigate(['signin']);
      }
    });
  }

}
