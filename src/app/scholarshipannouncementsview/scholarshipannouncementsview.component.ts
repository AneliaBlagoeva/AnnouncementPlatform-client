import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScholarshipAnnouncement } from '../models/scholarshipannouncement.model';
import { ScholarshipAnnouncementService } from '../scholarshipannouncements/scholarshipannouncements.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './scholarshipannouncementsview.component.html',
  styleUrls: ['./scholarshipannouncementsview.component.css']
})

export class ScholarshipAnnouncementViewComponent implements OnInit {

  schAnns: ScholarshipAnnouncement[];

  constructor(
    private router: Router,
    private scholarshipAnnService: ScholarshipAnnouncementService) {}

  ngOnInit() {
    this.scholarshipAnnService.getScholarshipAnnouncements()
      .subscribe( data => {
        this.schAnns = data;
      });
  }
}
