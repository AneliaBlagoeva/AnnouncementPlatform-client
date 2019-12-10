import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable, BehaviorSubject } from 'rxjs';



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    isLoggedIn: boolean;

    ngOnInit(): void {}

    constructor(private router: Router,
                private auth: AuthService) {
                auth.getLoggedInName.subscribe(flag => this.changeName(flag));
    }

    private changeName(flag: boolean): void {
        this.isLoggedIn = flag;
    }
}
