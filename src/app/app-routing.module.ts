import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobUserComponent } from './jobuser/jobuser.component';

const routes: Routes = [
  { path: 'userJobAttributes', component: JobUserComponent },
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