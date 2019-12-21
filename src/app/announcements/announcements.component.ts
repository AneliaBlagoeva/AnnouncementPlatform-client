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
    //date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let todayStr = yyyy + '-' + mm + '-' + dd;
    announcement.dateCreated = todayStr;

    let regexpUrl = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$');
    if(!regexpUrl.test(announcement.url) || announcement.anncmntName==""
    || announcement.url=="")
    {
      alert("Ypur input is not valid!")
    }else{
    this.annService.editAnn(announcement)
      .subscribe(res => {
      alert("Announcement is updated successfully!")
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
    }
  }
}
