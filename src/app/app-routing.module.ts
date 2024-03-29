import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/pages/index/index.component';
import { VideoindexComponent } from './components/pages/videoindex/videoindex.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { SubscriptionComponent } from './components/pages/subscription/subscription.component';
import { AccountvComponent } from './components/pages/accountv/accountv.component';
import { VideoComponent } from './components/pages/video/video.component';
import { ResetpasswordComponent } from './components/pages/resetpassword/resetpassword.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'videos',
    component: VideoindexComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'subscription',
    component: SubscriptionComponent
  },{
    path: 'verification',
    component: AccountvComponent
  },
  {
    path: 'video/:id',
    component: VideoComponent
  },
  {
    path: 'resetpassword',
    component: ResetpasswordComponent
  },
  { 
    path: 'resetpassword/:token',
    component: ResetpasswordComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
