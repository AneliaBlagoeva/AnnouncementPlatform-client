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


const routes: Routes = [
  { path: 'homepageAdmin/userJobAttributes', component: JobUserComponent},
  { path: 'homepageAdmin/userAttributes', component: UserComponent},
  { path: 'viewProfile', component: ViewProfileComponent},
  { path: 'homepageAdmin', component: HomePageAdminComponent},
  { path: 'homepageAuthuser', component: HomepageauthuserComponent},
  { path: 'homepageAdmin/studentAttributes', component: StudentUserComponent},
  { path: 'homepageAdmin/volunteerAttributes', component: VolunteerUserComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'changePass', component: ChangepasswordComponent }
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
