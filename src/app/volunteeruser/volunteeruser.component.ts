import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VolunteerUser } from '../models/volunteeruser.model';
import { VolunteerUserService } from './volunteeruser.service';

@Component ({
  selector: 'app-volunteeruser',
  templateUrl: './volunteeruser.component.html',
  styles: []
})
export class VolunteerUserComponent implements OnInit {

  volunteerattributes: VolunteerUser[];

  constructor(private router: Router, private userService: VolunteerUserService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.volunteerattributes = data;
      });
  }

  deleteUser(volunteerattributes: VolunteerUser): void {
    this.userService.deleteUser(volunteerattributes.email)
      .subscribe( data => {
        this.volunteerattributes = this.volunteerattributes.filter(u => u !== volunteerattributes);
      });
  }

  logout(){
  localStorage.removeItem('token');
  this.router.navigate(['login']);
  }
}
