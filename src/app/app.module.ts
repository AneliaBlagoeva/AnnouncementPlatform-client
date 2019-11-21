import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { JobUserComponent } from './jobuser/jobuser.component';
import { VolunteerUserComponent } from './volunteeruser/volunteeruser.component';
import { StudentUserComponent } from './studentuser/studentuser.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomePageAdminComponent } from './homepageadmin/homepageadmin.component';
import { TokenInterceptor } from './interceptors/TokenInterceptor';
import { JobUserService } from './jobuser/jobuser.service';
import { UserService } from './user/user.service';
import { StudentUserService } from './studentuser/studentuser.service'
import { VolunteerUserService } from './volunteeruser/volunteeruser.service'
import { ViewProfileComponent } from './viewprofile/viewprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    JobUserComponent,
    UserComponent,
    StudentUserComponent,
    VolunteerUserComponent,
    LoginComponent,
    RegisterComponent,
    HomePageAdminComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    JobUserService,
    StudentUserService,
    VolunteerUserService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }