import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, NgForm, FormGroupDirective, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  changePassForm: FormGroup;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.changePassForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

     // convenience getter for easy access to form fields
    get f() { return this.changePassForm.controls; }

  onFormSubmit() {
    this.authService.changePass(this.f.email.value, this.f.password.value)
      .subscribe(res => {
        this.router.navigate(['viewProfile']);
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
