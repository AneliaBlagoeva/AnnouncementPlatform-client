import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JobUser } from '../models/jobuser.model';
import { JobUserService } from './jobuser.service';

@Component ({
  selector: 'app-user',
  templateUrl: './jobuser.component.html',
  styles: []
})
export class JobUserComponent implements OnInit {

  userjobattributes: JobUser[];

  constructor(private router: Router, private userService: JobUserService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.userjobattributes = data;
      });
  }

  deleteUser(userjobattributes: JobUser): void {
    this.userService.deleteUser(userjobattributes.email)
      .subscribe( data => {
        this.userjobattributes = this.userjobattributes.filter(u => u !== userjobattributes);
      });
  }

  logout(){
  localStorage.removeItem('token');
  this.router.navigate(['login']);
  }
}
