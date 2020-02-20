import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isLoggedIn: boolean;
  ngOnInit(): void { }

  constructor(private router: Router,
    private auth: AuthService) {
    auth.getLoggedInName.subscribe(flag => this.changeName(flag));
  }
  private changeName(flag: boolean): void {
    this.isLoggedIn = flag;
  }

  logout() {
    this.auth.logout();
    this.isLoggedIn=false;
    this.router.navigate(['header']);
  }

  home(){
    let role='';
    role=localStorage.getItem('currentUserRole');
    if (role == 'ADMIN') {
                        this.router.navigate(['homepageAdmin']);
                    } else {
                        this.router.navigate(['homepageAuthuser']);
                    }
  }
}
