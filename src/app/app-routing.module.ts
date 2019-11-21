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

import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'homepageAdmin/userJobAttributes', component: JobUserComponent},
  { path: 'homepageAdmin/userAttributes', component: UserComponent},
  { path: 'homepageAdmin/viewProfile', component: ViewProfileComponent},
  { path: 'homepageAdmin', component: HomePageAdminComponent},
  { path: 'homepageAdmin/studentAttributes', component: StudentUserComponent},
  { path: 'homepageAdmin/volunteerAttributes', component: VolunteerUserComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
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
