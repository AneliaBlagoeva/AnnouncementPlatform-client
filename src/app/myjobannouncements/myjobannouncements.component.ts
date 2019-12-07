import { Component, OnInit } from '@angular/core';
import { JobAnnouncement } from '../models/jobannouncement.model';
import { Router, ActivatedRoute } from '@angular/router';
import { JobAnnouncementService } from '../jobannouncements/jobannouncements.service';
import { Announcement } from '../models/announcement.model';
import { AnnouncementService } from '../announcements/announcement.service';

@Component({
  selector: 'app-myjobannouncements',
  templateUrl: './myjobannouncements.component.html',
  styleUrls: ['./myjobannouncements.component.css']
})
export class MyJobAnnouncementsComponent implements OnInit {

  jobAnns = new JobAnnouncement();
  anns: Announcement;
  private sub: any;
  isEditable: boolean;

  constructor(
    private router: ActivatedRoute,
    private jobAnnService: JobAnnouncementService) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.anns = JSON.parse(params['anns']);
    });

    this.jobAnnService.getJobById(this.anns.anncmntId)
      .subscribe(data => {
        if (data == null) {
          this.jobAnns = new JobAnnouncement();

        } else {
          this.jobAnns = data;
        }
      });
  }

  edit() {
    this.isEditable = true;
  }

  save(announcement: JobAnnouncement) {
    announcement.anncmnt = this.anns;
    announcement.anncmntID = this.anns.anncmntId;
    this.jobAnnService.editAnn(announcement)
      .subscribe(res => {
      alert("Announcement is edited!")
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }

}
