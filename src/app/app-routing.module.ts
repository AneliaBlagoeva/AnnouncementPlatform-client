import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentUserComponent } from './studentuser/studentuser.component';
import { JobUserComponent } from './jobuser/jobuser.component';
import { UserComponent } from './user/user.component';
import { ViewProfileComponent } from './viewprofile/viewprofile.component';
import { VolunteerUserComponent } from './volunteeruser/volunteeruser.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomePageAdminComponent } from './homepageadmin/homepageadmin.component';
import { HomepageauthuserComponent } from './homepageauthuser/homepageauthuser.component';

import { AuthGuard } from './auth/auth.guard';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { JobAnnouncementsComponent } from './jobannouncements/jobannouncements.component';
import { ScholarshipAnnouncementComponent } from './scholarshipannouncements/scholarshipannouncements.component';
import { VolunteerAnnouncementComponent } from './volunteerannouncements/volunteerannouncements.component';
import { AnnouncementsViewComponent } from './announcementsview/announcementsview.component';
import { JobAnnouncementsViewComponent } from './jobannouncementsview/jobannouncementsview.component';
import { ScholarshipAnnouncementViewComponent } from './scholarshipannouncementsview/scholarshipannouncementsview.component';
import { VolunteerAnnouncementViewComponent } from './volunteerannouncementsview/volunteerannouncementsview.component';
import { MyAnnouncementsComponent } from './myannouncements/myannouncements.component';
import { MyJobAnnouncementsComponent } from './myjobannouncements/myjobannouncements.component';
import { MyScholarshipAnnouncementsComponent } from './myscholarshipannouncements/myscholarshipannouncements.component';
import { MyVoluntarinessAnnouncementsComponent } from './myvoluntarinessannouncements/myvoluntarinessannouncements.component';
import { CreateAnnouncementComponent } from './createannouncement/createannouncement.component';

const routes: Routes = [
  { path: 'userJobAttributes', component: JobUserComponent},
  { path: 'userAttributes', component: UserComponent},
  { path: 'viewProfile', component: ViewProfileComponent},
  { path: 'homepageAdmin', component: HomePageAdminComponent},
  { path: 'homepageAuthuser', component: HomepageauthuserComponent},
  { path: 'studentAttributes', component: StudentUserComponent},
  { path: 'volunteerAttributes', component: VolunteerUserComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'changePass', component: ChangepasswordComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'announcementsView', component: AnnouncementsViewComponent },
  { path: 'jobAnnouncements', component: JobAnnouncementsComponent },
  { path: 'scholarshipAnnouncements', component: ScholarshipAnnouncementComponent },
  { path: 'volunteerAnnouncements', component: VolunteerAnnouncementComponent },
  { path: 'jobAnnouncementsView', component: JobAnnouncementsViewComponent },
  { path: 'scholarshipAnnouncementsView', component: ScholarshipAnnouncementViewComponent },
  { path: 'volunteerAnnouncementsView', component: VolunteerAnnouncementViewComponent },
  { path: 'myAnnouncements', component: MyAnnouncementsComponent },
  { path: 'myJobAnnouncements', component: MyJobAnnouncementsComponent },
  { path: 'myScholarshipAnnouncements', component: MyScholarshipAnnouncementsComponent },
  { path: 'myVoluntarinessAnnouncements', component: MyVoluntarinessAnnouncementsComponent },
  { path: 'createAnnouncement', component: CreateAnnouncementComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
