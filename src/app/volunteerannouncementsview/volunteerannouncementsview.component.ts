

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolunteerAnnouncement } from '../models/volunteerannouncement.model';
import { VolunteerAnnouncementService } from '../volunteerannouncements/volunteerannouncement.service';

@Component({
  selector: 'app-volunteerannouncementsview',
  templateUrl: './volunteerannouncementsview.component.html',
  styleUrls: ['./volunteerannouncementsview.component.css']
})
export class VolunteerAnnouncementViewComponent implements OnInit {

   volAnns: VolunteerAnnouncement[];

  constructor(
    private router: Router,
    private volAnnService: VolunteerAnnouncementService) {}

  ngOnInit() {
    this.volAnnService.getVolAnnouncements()
      .subscribe( data => {
        this.volAnns = data;
      });
  }
}
