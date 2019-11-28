import { Component, OnInit } from '@angular/core';
import { JobAnnouncement } from '../models/jobannouncement.model';
import { Router } from '@angular/router';
import { JobAnnouncementService } from './jobannouncements.service';

@Component({
  selector: 'app-jobannouncements',
  templateUrl: './jobannouncements.component.html',
  styleUrls: ['./jobannouncements.component.css']
})
export class JobAnnouncementsComponent implements OnInit {

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
