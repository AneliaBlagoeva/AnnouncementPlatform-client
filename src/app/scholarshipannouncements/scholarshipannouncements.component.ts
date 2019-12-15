import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScholarshipAnnouncementService } from './scholarshipannouncements.service';
import { ScholarshipAnnouncement } from '../models/scholarshipannouncement.model';

@Component({
  selector: 'app-announcements',
  templateUrl: './scholarshipannouncements.component.html',
  styleUrls: ['./scholarshipannouncements.component.css']
})

export class ScholarshipAnnouncementComponent implements OnInit {

  schAnns: ScholarshipAnnouncement[];
  isEditable: boolean;

  constructor(
    private router: Router,
    private scholarshipAnnService: ScholarshipAnnouncementService) {}

  ngOnInit() {
    this.scholarshipAnnService.getScholarshipAnnouncements()
      .subscribe( data => {
        this.schAnns = data;
      });
  }

  
   edit() {
    this.isEditable = true;
  }

  save(announcement: ScholarshipAnnouncement) {
    let regexDecimal=new RegExp('^\d{0,2}(\.\d{0,2}){0,1}$');
    if(announcement.minGrade==0.0 ||announcement.scholarshipAward==0.0
      || announcement.requirements=="" || !regexDecimal.test(announcement.minGrade)
      || !regexDecimal.test(announcement.scholarshipAward))
      {
        alert("Your input is invalid!");
      }else{
    this.scholarshipAnnService.editAnn(announcement)
      .subscribe(res => {
        alert("Scholarship announcement is saved!");
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }
  }
}
