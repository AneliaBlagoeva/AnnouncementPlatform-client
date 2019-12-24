import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { JobUser } from '../models/jobuser.model';
import { StudentUser } from '../models/studentuser.model';
import { VolunteerUser } from '../models/volunteeruser.model';
import { JobUserService } from '../jobuser/jobuser.service';
import { StudentUserService } from '../studentuser/studentuser.service';
import { VolunteerUserService } from '../volunteeruser/volunteeruser.service';

@Component({
  selector: 'app-user',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewProfileComponent implements OnInit {
  userattributes = new User();
  jobuserattributes = new JobUser();
  studentuserattributes = new StudentUser();
  volunteeruserattributes = new VolunteerUser();
  isEditable: boolean;
  isWorker: boolean;
  isStudent: boolean;
  isVolunteer: boolean;

  constructor(
    private router: Router,
    private userService: UserService,
    private jobUserService: JobUserService,
    private studentUserService: StudentUserService,
    private volunteerUserService: VolunteerUserService) { }

  ngOnInit() {
    let em = localStorage.getItem('currentUserEmail');

    this.userService.getUserByEmail(em.substring(1, em.length - 1))
      .subscribe(data => {
        this.userattributes = data;
      })

    this.jobUserService.getUserByEmail(em.substring(1, em.length - 1))
      .subscribe(data => {
        this.jobuserattributes = data;
      })

    this.studentUserService.getUserByEmail(em.substring(1, em.length - 1))
      .subscribe(data => {
        this.studentuserattributes = data;
      })

  }

  edit() {
    this.isEditable = true;
  }

  save(user: User, jobuser: JobUser, studentuser: StudentUser, volunteeruser: VolunteerUser) {
    let regexPhone = new RegExp('^[0][1-9]{9}$');
    let regexAge = new RegExp('^[1-9][0-9]$');
    let regexDecimal = new RegExp('^[0-9]+\.[0-9]{0,2}$');


    if (user.fName != "" && user.lName != "" && user.password != "" && regexPhone.test(user.phone)
      && regexAge.test(user.age)) {
      this.userService.editUser(user)
        .subscribe(res => {
          alert("Profile is saved!");
        }, (err) => {
          console.log(err);
          alert(err.error);
        });

      if (this.isWorker) {
        if (jobuser.skills != "") {
          jobuser.user = user;
          jobuser.email = user.email;
          this.jobUserService.createUser(jobuser)
            .subscribe(res => {
              alert("Profile is saved!");
            }, (err) => {
              console.log(err);
              alert(err.error);
            });
        }else {
        alert("Your input is invalid");
      }
      } 


      if (this.isStudent) {
        if (studentuser.degree != "" && studentuser.grade != 0.0 && studentuser.program != ""
          && regexDecimal.test(studentuser.grade)) {
          studentuser.user = user;
          studentuser.email = user.email;
          this.studentUserService.createUser(studentuser)
            .subscribe(res => {
              alert("Profile is saved!");
            }, (err) => {
              console.log(err);
              alert(err.error);
            });
        }else {
          alert("Your input is invalid!");
        } 
      }

      if (this.isVolunteer) {
        volunteeruser.user = user;
        volunteeruser.email = user.email;
        this.volunteerUserService.createUser(volunteeruser)
          .subscribe(res => {
            alert("Profile is saved!");
          }, (err) => {
            console.log(err);
            alert(err.error);
          });
      }
    }else{
      alert("Your input is invalid!");
    }
  }

  changePass() {
    this.router.navigate(['changePass']);
  }
}
