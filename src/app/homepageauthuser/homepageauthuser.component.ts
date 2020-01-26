import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-homepageauthuser',
  templateUrl: './homepageauthuser.component.html',
  styleUrls: ['./homepageauthuser.component.css']
})
export class HomepageauthuserComponent implements OnInit {

   user: User;

  constructor(
    private router: Router,
    private userService: UserService) {}

  ngOnInit() {
    const em = localStorage.getItem('currentUserEmail');

    this.userService.getUserByEmail(em.substring(1, em.length - 1))
      .subscribe(data => {
        this.user = data;
      });
  }

  deleteUser(): void {
    if(confirm("Are you sure you want to delete your account?")){
     this.userService.deleteUser(this.user)
      .subscribe( data => {
         this.router.navigate(['login']);
      });
    }

  }

  logout() {
  localStorage.removeItem('token');
  this.router.navigate(['login']);
  }
}

