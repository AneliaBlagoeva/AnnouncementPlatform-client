import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component ({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  userattributes: User[];

  constructor(
    private router: Router,
    private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.userattributes = data;
      });
  }


  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.userattributes = this.userattributes.filter(u => u !== user);
      })
  };

  logout(){
  localStorage.removeItem('token');
  this.router.navigate(['login']);
  }
}
