import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { StripeService, Elements, Element as StripeElement, ElementsOptions, Token} from 'ngx-stripe';
import { SuperffService } from 'src/app/services/superff.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { userInfo } from '../../interfaces/user';
import { MyplanComponent } from '../myplan/myplan.component';
@Component({
  selector: 'app-update-pay-info',
  templateUrl: './update-pay-info.component.html',
  styleUrls: ['../pages/subscription/subscription.component.css']
})
export class UpdatePayInfoComponent implements OnInit {
  elements: Elements;
  card: StripeElement;
  elementOptions: ElementsOptions = {
    locale: 'en'
  };

  stripeTest: FormGroup;

  clientData: {
    token: Token, 
    email: String,
    pass: String
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
  passError: boolean;

  constructor(private fb:FormBuilder, private StripeSvc: StripeService, private superffservice: SuperffService, private router: Router, private appcomponent: AppComponent, private myplan: MyplanComponent) { }

  ngOnInit(): void {
    this.clientData = {
      token: null,
      email: null,
      pass: null
    }
    this.loadingPage = false;
    this.error = false;
    this.success = false;
    this.responseMessage = null;
    this.stripeTest = this.fb.group({
      name: ['',Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      pass: ''
    });
    this.loadPage();
  }

  loadPage(){//manda llamar el servicio para saber si ya esta suscrito y saber si hay que mostrar la pagina o no
      this.userinfo = this.appcomponent.getData();
      this.stripeTest.setValue({name: `${this.userinfo.first_name} ${this.userinfo.last_name}`, email: this.userinfo.email, pass: ''});
      this.StripeSvc.elements(this.elementOptions).subscribe((elements)=>{
        this.elements = elements;
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#034663',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#141212',
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
    });
  }

  buy(){//manda llamar el servicio de suscripcion
    this.loadingPage = true;
    const name= this.stripeTest.get('name').value;
    const email = this.stripeTest.get('email').value;
    const pass = this.stripeTest.get('pass').value;
    this.StripeSvc.createToken(this.card, {name}).subscribe((result)=>{
      if(result.token){
        this.clientData.token = result.token;
        this.clientData.email = email;
        this.clientData.pass = pass;
        this.superffservice.updatePayInfo(this.clientData).subscribe((data:any)=>{
          this.responseMessage = data.response;
          this.success = true;
          this.loadingPage = false;
        },(error)=>{
          this.error = true;
          this.responseMessage = error.error.response;
          this.loadingPage = false;
        });
        /* this.superffservice.subscribe(this.clientData).subscribe((data: any)=>{
          this.loadingPage = false;
          this.success = true;
          this.responseMessage = data.response;
        }, (error)=>{
          this.loadingPage = false;
          this.error = true;
          this.responseMessage = error.error.response;
        }); */
      }else if(result.error){
        this.loadingPage = false;
        this.error = true;
        this.responseMessage = result.error.message;
      }
    })
  }

 /*  cancel(){
    this.myplan.update = false;
  } */

  update(){
    if(this.stripeTest.get('pass').value == ''){
      this.passError = true;
      this.responseMessage = "password is required";
    }else {
      this.buy();
    }
  }


}
