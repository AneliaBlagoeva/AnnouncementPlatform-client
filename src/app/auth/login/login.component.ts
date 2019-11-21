import { Component, OnInit, Injectable } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';

@Component ({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = '/userJobAttributes';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(res=>{
                if (res.token) {
                    localStorage.setItem("currentUserEmail",JSON.stringify(res.username));
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('currentUserRole', res.role.description);
                    
                    let role =res.role.description;
                    if(role=="ADMIN")
                    {
                    this.router.navigate(['homepageAdmin']);
                    }else{
                        this.router.navigate(['homepageAuthUser']);
                    }
                }
                  },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

}
