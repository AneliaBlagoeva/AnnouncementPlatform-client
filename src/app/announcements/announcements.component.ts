import { Component, OnInit } from '@angular/core';
import { Announcement } from '../models/announcement.model';
import { Router } from '@angular/router';
import { AnnouncementService } from './announcement.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})

export class AnnouncementsComponent implements OnInit {

  anns: Announcement[];
  isEditable: boolean;

  constructor(
    private router: Router,
    private annService: AnnouncementService) {}

  ngOnInit() {
    this.annService.getAnnouncements()
      .subscribe( data => {
        this.anns = data;
      });
  }

  edit() {
    this.isEditable = true;
  }

  deleteAnn(announcement: Announcement): void {
    this.annService.deleteAnn(announcement)
      .subscribe( data => {
        this.anns = this.anns.filter(u => u !== announcement);
      });
  }
  
  onOptionsSelected(event){
    console.log(event); //option value will be sent as event
   }

  save(announcement: Announcement) {
    this.annService.editAnn(announcement)
      .subscribe(res => {
      alert("Announcement is updated successfully!")
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }
}
