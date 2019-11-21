import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
  selector: 'app-user',
  templateUrl: './homepageadmin.component.html',
  styles: []
})
export class HomePageAdminComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  logout() {
  localStorage.removeItem('token');
  this.router.navigate(['login']);
  }
}
