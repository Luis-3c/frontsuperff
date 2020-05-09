import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
