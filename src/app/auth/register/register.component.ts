import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Validators, FormBuilder, FormGroupDirective, FormControl, NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname : ['', Validators.required],
      email : ['',  Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
      password : ['', Validators.required],
      lastname : ['', Validators.required],
      phone : ['',Validators.pattern(/^[0]\d{3}\d{4}\d{2}$/)],
      age : ['',Validators.pattern(/^[1-9][0-9]$/)],
      country : [''],
      city : ['']
    });
  }

     // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

  onFormSubmit() {
    
    this.authService.register(this.f.firstname.value, this.f.email.value, this.f.password.value,
                              this.f.lastname.value, this.f.phone.value, this.f.city.value,
                              this.f.country.value, this.f.age.value)
      .subscribe(res => {
        alert('Successfull registration!')
        this.router.navigate(['']);
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
