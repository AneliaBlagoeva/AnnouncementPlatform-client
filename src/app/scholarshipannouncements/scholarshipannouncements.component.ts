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
