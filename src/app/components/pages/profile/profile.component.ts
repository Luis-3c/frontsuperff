import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  option: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  select(option){
    let element = null;
    let elements = null;
    switch (option) {
      case 'option1':
        this.option = 1;
        element = document.querySelector('.'+option);
        element.classList.add('active');
        elements = document.querySelector('.option2');
        elements.classList.remove('active');
        elements = document.querySelector('.option3');
        elements.classList.remove('active');
        break;
      case 'option2':
        this.option = 2;
        element = document.querySelector('.'+option);
        element.classList.add('active');
        elements = document.querySelector('.option1');
        elements.classList.remove('active');
        elements = document.querySelector('.option3');
        elements.classList.remove('active');
        break;
      case 'option3':
          element = document.querySelector('.'+option);
          element.classList.add('active');
          elements = document.querySelector('.option1');
          elements.classList.remove('active');
          elements = document.querySelector('.option2');
          elements.classList.remove('active');
          break;
    
      default:
        break;
    }
  }

}
