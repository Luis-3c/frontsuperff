import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { StripeService, Elements, Element as StripeElement, ElementsOptions, Token} from 'ngx-stripe';

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

  constructor(private fb:FormBuilder, private StripeSvc: StripeService) { 
    this.clientData = {
      token: null,
      email: null
    }
  }

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['',Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });

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
    })
  }

  buy(){

  }

}
