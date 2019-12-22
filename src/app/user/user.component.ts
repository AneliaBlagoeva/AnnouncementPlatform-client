import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component ({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
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
      });
  }

  editUser(user: User): void {
    this.userService.editUser(user)
      .subscribe( data => {
        this.userattributes = this.userattributes.filter(u => u !== user);
      });
  }
}
