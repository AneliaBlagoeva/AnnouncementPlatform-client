import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentUser } from '../models/studentuser.model';
import { StudentUserService } from './studentuser.service';

@Component ({
  selector: 'app-user',
  templateUrl: './studentuser.component.html',
  styles: []
})
export class StudentUserComponent implements OnInit {

  studentattributes: StudentUser[];

  constructor(private router: Router, private userService: StudentUserService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.studentattributes = data;
      });
  }

  deleteUser(studentattributes: StudentUser): void {
    this.userService.deleteUser(studentattributes.email)
      .subscribe( data => {
        this.studentattributes = this.studentattributes.filter(u => u !== studentattributes);
      });
  }

  logout(){
  localStorage.removeItem('token');
  this.router.navigate(['login']);
  }
}
