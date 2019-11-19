import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentUserComponent } from './studentuser/studentuser.component';
import { JobUserComponent } from './jobuser/jobuser.component';
import { UserComponent } from './user/user.component';
import { VolunteerUserComponent } from './volunteeruser/volunteeruser.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'userJobAttributes', component: JobUserComponent},
  { path: 'userAttributes', component: UserComponent},
  { path: 'studentAttributes', component: StudentUserComponent},
  { path: 'volunteerAttributes', component: VolunteerUserComponent},
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
