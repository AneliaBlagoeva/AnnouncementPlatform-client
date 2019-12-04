import { Component, OnInit } from '@angular/core';
import { JobAnnouncement } from '../models/jobannouncement.model';
import { Router } from '@angular/router';
import { JobAnnouncementService } from '../jobannouncements/jobannouncements.service';

@Component({
  selector: 'app-jobannouncements',
  templateUrl: './jobannouncementsview.component.html',
  styleUrls: ['./jobannouncementsview.component.css']
})
export class JobAnnouncementsViewComponent implements OnInit {

   jobAnns: JobAnnouncement[];

  constructor(
    private router: Router,
    private jobAnnService: JobAnnouncementService) {}

  ngOnInit() {
    this.jobAnnService.getJobAnnouncements()
      .subscribe( data => {
        this.jobAnns = data;
      });
  }

}
