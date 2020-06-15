import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../../app.component';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['../pages/profile/profile.component.css']
})
export class MyinfoComponent implements OnInit {

  constructor( public app: AppComponent) { }

  ngOnInit(): void {
  }

}
