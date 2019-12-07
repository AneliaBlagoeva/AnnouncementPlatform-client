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
}
