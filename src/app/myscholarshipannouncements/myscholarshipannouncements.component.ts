import { Component, OnInit } from '@angular/core';
import { ScholarshipAnnouncement } from '../models/scholarshipannouncement.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ScholarshipAnnouncementService } from '../scholarshipannouncements/scholarshipannouncements.service';
import { Announcement } from '../models/announcement.model';
import { Degree } from '../models/degree.model';

@Component({
  selector: 'app-myscholarshipannouncements',
  templateUrl: './myscholarshipannouncements.component.html',
  styleUrls: ['./myscholarshipannouncements.component.css']
})
export class MyScholarshipAnnouncementsComponent implements OnInit {

  schAnns = new ScholarshipAnnouncement();
  anns: Announcement;
  private sub: any;
  isEditable = false;

  constructor(
    private router: ActivatedRoute,
    private scholarshipAnnService: ScholarshipAnnouncementService) { }

  onOptionsSelected(event) {
    console.log(event); //option value will be sent as event
  }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.anns = JSON.parse(params['anns']);
    });

    this.scholarshipAnnService.getScholarshipById(this.anns.anncmntId)
      .subscribe(data => {
        if (data == null) {
          this.schAnns.degreeAllowed = new Degree();
        } else {
          this.schAnns = data;
        }
      });
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
        announcement.anncmnt = this.anns;
        announcement.anncmntID = this.anns.anncmntId;
        this.scholarshipAnnService.editAnn(announcement)
          .subscribe(res => {
            alert("Announcement is edited!")
            this.isEditable = false;
          }, (err) => {
            console.log(err);
            alert(err.error);
          });
      }
    }
    this.isEditable = false;
  }
}
