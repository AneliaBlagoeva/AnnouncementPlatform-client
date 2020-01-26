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
    private scholarshipAnnService: ScholarshipAnnouncementService) { }

  ngOnInit() {
    this.scholarshipAnnService.getScholarshipAnnouncements()
      .subscribe(data => {
        if (data != null) {
          this.schAnns = data;
        }
        else {

        }
      });
  }

  onOptionsSelected(event) {
    console.log(event); //option value will be sent as event
  }

  edit() {
    this.isEditable = true;
  }

  save(announcement: ScholarshipAnnouncement) {
    if (confirm("Are you sure you want to save?")) {
      if (announcement.minGrade == 0.0 || announcement.scholarshipAward == 0.0
        || announcement.requirements == "") {
        alert("Your input is invalid!");
      } else {
        this.scholarshipAnnService.editAnn(announcement)
          .subscribe(res => {
            alert("Scholarship announcement is saved!");
          }, (err) => {
            console.log(err);
            alert(err.error);
          });
      }
    }
    this.isEditable = false;
  }
}
