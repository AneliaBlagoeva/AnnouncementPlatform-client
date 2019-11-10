import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JobUser } from '../models/jobuser.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  userjobattributes: JobUser[];

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.userjobattributes = data;
      });
  };

  deleteUser(userjobattributes: JobUser): void {
    this.userService.deleteUser(userjobattributes.email)
      .subscribe( data => {
        this.userjobattributes = this.userjobattributes.filter(u => u !== userjobattributes);
      })
  };

}