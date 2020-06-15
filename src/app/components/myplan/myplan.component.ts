import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { SuperffService } from '../../services/superff.service';

@Component({
  selector: 'app-myplan',
  templateUrl: './myplan.component.html',
  styleUrls: ['../pages/profile/profile.component.css']
})
export class MyplanComponent implements OnInit {

  paymentInfo: [];
  error: boolean;
  loading: boolean;
  update: boolean;
  responseMessage: string;

  constructor(public app: AppComponent, private sffService: SuperffService) { }

  ngOnInit(): void {
    this.getCustomInfo();
  }

  getCustomInfo(){
    if (this.app.fullAccess){
      //obtener la información del cliente
      this.loading = true;
      this.sffService.getCustomInfo().subscribe((data: any)=>{
        this.paymentInfo = data;
        this.loading = false;
      },(error)=>{
        if(error.status === 409){
          this.error = true;
          this.responseMessage = error.error.response;
          this.loading = false;
        }
      });
    }else{
      if(this.app.userStatus === ("active" || "incomplete" || "incomplete_expired" || "past_due" || "canceled" || "unpaid")){
        this.error = true;
      }
    }
  }

  updateInfo(){
    this.update = true;
  }

}
