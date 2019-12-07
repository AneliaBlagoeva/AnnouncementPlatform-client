import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    isLoggedIn$: Observable<boolean>; 
    ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isAuthenticated();
    }
    
    constructor(private router: Router,
        private auth : AuthService) {}

        logout() {
            this.auth.logout();
            this.router.navigate(['/']);
        } 
}
