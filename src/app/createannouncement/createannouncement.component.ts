import { Component, OnInit } from '@angular/core';
import { Announcement } from '../models/announcement.model';
import { Router } from '@angular/router';
import { AnnouncementService } from '../announcements/announcement.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-createannouncement',
  templateUrl: './createannouncement.component.html',
  styleUrls: ['./createannouncement.component.css']
})

export class CreateAnnouncementComponent implements OnInit {
  createForm: FormGroup;
  anns = new Announcement();

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private annService: AnnouncementService) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      anncmntName: ['', Validators.required],
      description: [''],
      url: ['', Validators.pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)],
      categoryId: [1, Validators.required],
      dateCreated:['', Validators.compose([Validators.required,Validators.pattern(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)])]
    });

  }

  onOptionsSelected(event) {
    console.log(event); //option value will be sent as event
  }

  get f() { return this.createForm.controls; }

  onFormSubmit() {
    this.anns.status = { statusId: 2, statusName: '' };
    this.anns.category = { categoryId: 1, categoryName: '' };
    this.anns.anncmntName = this.f.anncmntName.value;

    this.anns.dateCreated=this.f.dateCreated.value;
    this.anns.description = this.f.description.value;
    this.anns.url = this.f.url.value;
    this.anns.category.categoryId = this.f.categoryId.value;
    this.anns.status.statusId = 2;


    let em = localStorage.getItem('currentUserEmail');
    this.anns.userEmail = em.substring(1, em.length - 1);
    this.annService.createAnn(this.anns)
      .subscribe(res => {
        if (this.anns.category.categoryId == 1) {
          this.router.navigate(['myJobAnnouncements', { anns: JSON.stringify(res) }]);
        }
        else if (this.anns.category.categoryId == 2) {
          this.router.navigate(['myScholarshipAnnouncements', { anns: JSON.stringify(res) }]);
        }
        else {
          this.router.navigate(['myVoluntarinessAnnouncements', { anns: JSON.stringify(res) }]);
        }
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }
}
