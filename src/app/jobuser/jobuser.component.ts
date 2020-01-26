import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JobUser } from '../models/jobuser.model';
import { JobUserService } from './jobuser.service';

@Component ({
  selector: 'app-user',
  templateUrl: './jobuser.component.html',
  styleUrls: ['./jobuser.component.css']
})
export class JobUserComponent implements OnInit {

  userjobattributes: JobUser[];
  isEditable=false;

  constructor(private router: Router, private userService: JobUserService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.userjobattributes = data;
      });
  }

  editUser(){
    this.isEditable=true;
  }
  saveUser(userjobattributes: JobUser): void {
    if (confirm("Are you sure you want to edit?")) {
      this.userService.editUser(userjobattributes)
      .subscribe(res => {
        alert("User is saved!");
      });
    }
    this.isEditable=false;
  }
  
}
