import { Component, OnInit } from '@angular/core';
import { Announcement } from '../models/announcement.model';
import { Router } from '@angular/router';
import { AnnouncementsViewService } from './announcementsview.service';

@Component({
  selector: 'app-announcementsview',
  templateUrl: './announcementsview.component.html',
  styleUrls: ['./announcementsview.component.css']
})

export class AnnouncementsViewComponent implements OnInit {

  anns: Announcement[];

  constructor(
    private router: Router,
    private annService: AnnouncementsViewService) {}

  ngOnInit() {
    this.annService.getAnnouncements()
      .subscribe( data => {
        this.anns = data;
      });
  }
}
