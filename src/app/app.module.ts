import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/pages/index/index.component';
import { VidcardindexComponent } from './components/pages/index/vidcardindex/vidcardindex.component';
import { VideoindexComponent } from './components/pages/videoindex/videoindex.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { SubscriptionComponent } from './components/pages/subscription/subscription.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AccountvComponent } from './components/pages/accountv/accountv.component';
import { VideoComponent } from './components/pages/video/video.component';
import { VideoindexcardComponent } from './components/videoindexcard/videoindexcard.component';
import { VideocardComponent } from './components/videocard/videocard.component';
import { SafePipe } from './pipes/safe.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { ResetpasswordComponent } from './components/pages/resetpassword/resetpassword.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { MyinfoComponent } from './components/myinfo/myinfo.component';
import { MyplanComponent } from './components/myplan/myplan.component';
import { UpdatePayInfoComponent } from './components/update-pay-info/update-pay-info.component'; // <-- import the module


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    VidcardindexComponent,
    VideoindexComponent,
    SignupComponent,
    LoaderComponent,
    SigninComponent,
    SubscriptionComponent,
    AccountvComponent,
    VideoComponent,
    VideoindexcardComponent,
    VideocardComponent,
    SafePipe,
    ResetpasswordComponent,
    ProfileComponent,
    MyinfoComponent,
    MyplanComponent,
    UpdatePayInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_OPZ1ATnLOl8lksdtMwg2Dw9900Mj83naSI'),
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
