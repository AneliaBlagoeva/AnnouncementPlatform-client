import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JobUserComponent } from './jobuser/jobuser.component';
import { AppRoutingModule } from './app-routing.module';
import {JobUserService} from './jobuser/jobuser.service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    JobUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [JobUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }