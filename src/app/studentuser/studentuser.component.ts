import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentUser } from '../models/studentuser.model';
import { StudentUserService } from './studentuser.service';

@Component ({
  selector: 'app-user',
  templateUrl: './studentuser.component.html',
  styleUrls: ['./studentuser.component.css']
})
export class StudentUserComponent implements OnInit {

  studentattributes: StudentUser[];
  isEditable=false;

  constructor(private router: Router, private userService: StudentUserService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.studentattributes = data;
      });
  }

  deleteUser(studentattributes: StudentUser): void {
    if(confirm("Are you sure you want to delete?")){
    this.userService.deleteUser(studentattributes.email)
      .subscribe( data => {
        this.studentattributes = this.studentattributes.filter(u => u !== studentattributes);
      });
  }
}

onOptionsSelected(event) {
  console.log(event); //option value will be sent as event
}

editUser(){
  this.isEditable=true;
}

saveUser(user: StudentUser): void {
  if (confirm("Are you sure you want to edit?")) {
    this.userService.editUser(user)
    .subscribe(res => {
      alert("User is saved!");
    });
  }
  this.isEditable=false;
}
}
