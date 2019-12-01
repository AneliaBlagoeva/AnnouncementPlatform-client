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
import { HomepageauthuserComponent } from './homepageauthuser/homepageauthuser.component';
import { TokenInterceptor } from './interceptors/TokenInterceptor';
import { JobUserService } from './jobuser/jobuser.service';
import { UserService } from './user/user.service';
import { StudentUserService } from './studentuser/studentuser.service'
import { VolunteerUserService } from './volunteeruser/volunteeruser.service'
import { ViewProfileComponent } from './viewprofile/viewprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AuthService } from './auth.service';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { JobAnnouncementsComponent } from './jobannouncements/jobannouncements.component';
import { JobAnnouncementService } from './jobannouncements/jobannouncements.service';
import { ScholarshipAnnouncementComponent } from './scholarshipannouncements/scholarshipannouncements.component';
import { ScholarshipAnnouncementService } from './scholarshipannouncements/scholarshipannouncements.service'
import { VolunteerAnnouncementComponent } from './volunteerannouncements/volunteerannouncements.component';
import { VolunteerAnnouncementService } from './volunteerannouncements/volunteerannouncement.service';
import { AnnouncementsViewService } from './announcementsview/announcementsview.service';
import { AnnouncementsViewComponent } from './announcementsview/announcementsview.component';
import { JobAnnouncementsViewComponent } from './jobannouncementsview/jobannouncementsview.component';
import { JobAnnouncementViewService } from './jobannouncementsview/jobannouncementsview.service';
import { ScholarshipAnnouncementViewComponent } from './scholarshipannouncementsview/scholarshipannouncementsview.component';
import { ScholarshipAnnouncementViewService } from './scholarshipannouncementsview/scholarshipannouncementsview.service'


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
    ViewProfileComponent,
    ChangepasswordComponent,
    HomepageauthuserComponent,
    AnnouncementsComponent,
    JobAnnouncementsComponent,
    ScholarshipAnnouncementComponent,
    VolunteerAnnouncementComponent,
    AnnouncementsViewComponent,
    JobAnnouncementsViewComponent,
    ScholarshipAnnouncementViewComponent
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
    UserService,
    AuthService,
    JobAnnouncementService,
    ScholarshipAnnouncementService,
    VolunteerAnnouncementService,
    AnnouncementsViewService,
    JobAnnouncementViewService,
    ScholarshipAnnouncementViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }