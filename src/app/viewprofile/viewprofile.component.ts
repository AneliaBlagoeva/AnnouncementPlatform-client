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
import { Degree } from '../models/degree.model';

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
  isEditable = false;
  isWorker: boolean;
  isStudent: boolean;
  isVolunteer: boolean;

  constructor(
    private router: Router,
    private userService: UserService,
    private jobUserService: JobUserService,
    private studentUserService: StudentUserService,
    private volunteerUserService: VolunteerUserService) { }

  onOptionsSelected(event) {
    console.log(event); //option value will be sent as event
  }

  ngOnInit() {
    let em = localStorage.getItem('currentUserEmail');
    this.userService.getUserByEmail(em.substring(1, em.length - 1))
      .subscribe(data => {
        if (data.email != null) {
          this.userattributes = data;
        }
      })

    this.jobUserService.getUserByEmail(em.substring(1, em.length - 1))
      .subscribe(data => {
        if (data.email != null) {
          this.jobuserattributes = data;
        }
      })

    this.studentUserService.getUserByEmail(em.substring(1, em.length - 1))
      .subscribe(data => {
        if (data.email != null) {
          this.studentuserattributes = data;
        }
        else {
          this.studentuserattributes.degree = new Degree();
        }
      })

  }

  edit() {
    this.isEditable = true;
  }

  save(user: User, jobuser: JobUser, studentuser: StudentUser, volunteeruser: VolunteerUser) {
    if(confirm("Are you sure you want to save?")){
    let regexPhone = new RegExp('^[0][1-9]{9}$');
    let flag = true;

    if (user.fName != "" && user.lName != "" && user.password != "" && regexPhone.test(user.phone)) {
      this.userService.editUser(user)
        .subscribe(res => {
        }, (err) => {
          flag = false;
          console.log(err);
          alert(err.error);
        });

      if (this.isWorker) {
        if (jobuser.skills != "") {
          jobuser.user = user;
          jobuser.email = user.email;
          this.jobUserService.createUser(jobuser)
            .subscribe(res => {

            }, (err) => {
              flag = false;
              console.log(err);
              alert(err.error);
            });
        } else {
          alert("Your input is invalid");
        }
      }


      if (this.isStudent) {
        if (studentuser.grade != 0.0 && studentuser.program != "") {
          studentuser.user = user;
          studentuser.email = user.email;
          this.studentUserService.createUser(studentuser)
            .subscribe(res => {

            }, (err) => {
              flag = false;
              console.log(err);
              alert(err.error);
            });
        } else {
          alert("Your input is invalid!");
        }
      }

      if (this.isVolunteer) {
        volunteeruser.user = user;
        volunteeruser.email = user.email;
        this.volunteerUserService.createUser(volunteeruser)
          .subscribe(res => {
          }, (err) => {
            flag = false;
            console.log(err);
            alert(err.error);
          });
      }
    } else {
      alert("Your input is invalid!");
    }

    if (flag) {
      alert("Profile is saved");
      this.isEditable=false;
    }
  }
}

  changePass() {
    this.router.navigate(['changePass']);
  }
}
