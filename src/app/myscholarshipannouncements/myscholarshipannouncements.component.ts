import { Component, OnInit } from '@angular/core';
import { ScholarshipAnnouncement } from '../models/scholarshipannouncement.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ScholarshipAnnouncementService } from '../scholarshipannouncements/scholarshipannouncements.service';
import { Announcement } from '../models/announcement.model';

@Component({
  selector: 'app-myscholarshipannouncements',
  templateUrl: './myscholarshipannouncements.component.html',
  styleUrls: ['./myscholarshipannouncements.component.css']
})
export class MyScholarshipAnnouncementsComponent implements OnInit {

   schAnns = new ScholarshipAnnouncement();
   anns:Announcement;
   private sub: any;
   isEditable: boolean;

  constructor(
    private router: ActivatedRoute,
    private scholarshipAnnService: ScholarshipAnnouncementService) {}

  ngOnInit() {
     this.sub = this.router.params.subscribe(params => {
      this.anns = JSON.parse(params['anns']);
    });

     this.scholarshipAnnService.getScholarshipById(this.anns.anncmntId)
      .subscribe(data => {
        if (data == null) {
          this.schAnns = new ScholarshipAnnouncement();

        } else {
          this.schAnns = data;
        }
      });
  }

  edit() {
    this.isEditable = true;
  }

  save(announcement: ScholarshipAnnouncement) {
    announcement.anncmnt = this.anns;
    announcement.anncmntID = this.anns.anncmntId;
    this.scholarshipAnnService.editAnn(announcement)
      .subscribe(res => {
      //  this.router.navigate(['viewProfile']);
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }

}
