

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolunteerAnnouncementService } from './volunteerannouncement.service';
import { VolunteerAnnouncement } from '../models/volunteerannouncement.model';

@Component({
  selector: 'app-volunteerannouncements',
  templateUrl: './volunteerannouncements.component.html',
  styleUrls: ['./volunteerannouncements.component.css']
})
export class VolunteerAnnouncementComponent implements OnInit {

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
