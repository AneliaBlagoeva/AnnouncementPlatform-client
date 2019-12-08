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

   isLoggedIn$: Observable<boolean>;
    ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isAuthenticated();
    }

    constructor(private router: Router,
                private auth: AuthService) {}

        logout() {
            this.auth.logout();
            this.isLoggedIn$ = this.auth.isAuthenticated();
            this.router.navigate(['login']);
        }
}
