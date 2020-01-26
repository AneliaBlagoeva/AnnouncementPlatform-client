import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  userattributes: User[];
  isEditable=false;

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(data => {
        this.userattributes = data;
      });
  }

  onOptionsSelected(event) {
    console.log(event); //option value will be sent as event
  }

  deleteUser(user: User): void {
    if (confirm("Are you sure you want to delete?")) {
      this.userService.deleteUser(user)
        .subscribe(data => {
          this.userattributes = this.userattributes.filter(u => u !== user);
        });
    }
  }

  editUser(){
    this.isEditable=true;
  }
  saveUser(user: User): void {
    if (confirm("Are you sure you want to edit?")) {
      this.userService.editUser(user)
      .subscribe(res => {
        alert("User is saved!");
      });
    }
    this.isEditable=false;
  }
}
