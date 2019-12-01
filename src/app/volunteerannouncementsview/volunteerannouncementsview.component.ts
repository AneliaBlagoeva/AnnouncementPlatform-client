

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolunteerAnnouncementViewService } from './volunteerannouncementview.service';
import { VolunteerAnnouncement } from '../models/volunteerannouncement.model';

@Component({
  selector: 'app-volunteerannouncementsview',
  templateUrl: './volunteerannouncementsview.component.html',
  styleUrls: ['./volunteerannouncementsview.component.css']
})
export class VolunteerAnnouncementViewComponent implements OnInit {

   volAnns: VolunteerAnnouncement[];

  constructor(
    private router: Router,
    private volAnnService: VolunteerAnnouncementViewService) {}

  ngOnInit() {
    this.volAnnService.getVolAnnouncements()
      .subscribe( data => {
        this.volAnns = data;
      });
  }
}
