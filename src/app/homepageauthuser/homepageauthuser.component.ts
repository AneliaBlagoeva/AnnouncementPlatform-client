import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepageauthuser',
  templateUrl: './homepageauthuser.component.html',
  styleUrls: ['./homepageauthuser.component.css']
})
export class HomepageauthuserComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  logout() {
  localStorage.removeItem('token');
  this.router.navigate(['login']);
  }
}

