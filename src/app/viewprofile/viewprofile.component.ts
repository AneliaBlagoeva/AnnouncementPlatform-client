import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component ({
  selector: 'app-user',
  templateUrl: './viewprofile.component.html',
  styles: []
})
export class ViewProfileComponent implements OnInit {
  userattributes: User;

  constructor(
    private router: Router,
    private userService: UserService) {}

  ngOnInit() {
    let em = localStorage.getItem('currentUserEmail');
    
    this.userService.getUserByEmail(em.substring(1, em.length - 1))
    .subscribe( data => {
      this.userattributes = data;
    })
  }

  logout(){
  localStorage.removeItem('token');
  this.router.navigate(['login']);
  }
}
