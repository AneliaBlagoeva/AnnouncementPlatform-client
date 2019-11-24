import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ReactiveFormsModule,Validators, FormBuilder, FormGroupDirective, FormControl, NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  worker: boolean;
  student: boolean;
  volunteer: boolean;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      lastname : ['', Validators.required],
      phone : ['', Validators.required],
      age : ['', Validators.required],
      country : ['', Validators.required],
      city : ['', Validators.required]
    });
  }

     // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

  onFormSubmit() {
    this.authService.register(this.f.firstname.value, this.f.email.value, this.f.password.value,
                              this.f.lastname.value, this.f.phone.value, this.f.city.value,
                              this.f.country.value, this.f.age.value)
      .subscribe(res => {
        if (this.worker) {
        this.router.navigate(['']);
        } else {
          this.router.navigate(['login']);
        }
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}
