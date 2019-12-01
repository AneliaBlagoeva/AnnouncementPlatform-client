import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScholarshipAnnouncementViewService } from './scholarshipannouncementsview.service';
import { ScholarshipAnnouncement } from '../models/scholarshipannouncement.model';

@Component({
  selector: 'app-announcements',
  templateUrl: './scholarshipannouncementsview.component.html',
  styleUrls: ['./scholarshipannouncementsview.component.css']
})

export class ScholarshipAnnouncementViewComponent implements OnInit {

  schAnns: ScholarshipAnnouncement[];

  constructor(
    private router: Router,
    private scholarshipAnnService: ScholarshipAnnouncementViewService) {}

  ngOnInit() {
    this.scholarshipAnnService.getScholarshipAnnouncements()
      .subscribe( data => {
        this.schAnns = data;
      });
  }
}
