import { Component, OnInit } from '@angular/core';
import { VolunteerAnnouncement } from '../models/volunteerannouncement.model';
import { Router, ActivatedRoute } from '@angular/router';
import { VolunteerAnnouncementService } from '../volunteerannouncements/volunteerannouncement.service';
import { Announcement } from '../models/announcement.model';

@Component({
  selector: 'app-myvoluntarinessannouncements',
  templateUrl: './myvoluntarinessannouncements.component.html',
  styleUrls: ['./myvoluntarinessannouncements.component.css']
})
export class MyVoluntarinessAnnouncementsComponent implements OnInit {

  volAnns = new VolunteerAnnouncement();
  anns: Announcement;
  private sub: any;
  isEditable: boolean;

  constructor(
    private router: ActivatedRoute,
    private voluntarinessAnnService: VolunteerAnnouncementService) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.anns = JSON.parse(params['anns']);
    })

    this.voluntarinessAnnService.getVoluntarinessById(this.anns.anncmntId)
      .subscribe(data => {
        if (data == null) {
          this.volAnns = new VolunteerAnnouncement();

        } else {
          this.volAnns = data;
        }
      });
  }

  edit() {
    this.isEditable = true;
  }

  save(announcement: VolunteerAnnouncement) {
    if (confirm("Are you sure you want to save?")) {
      if (announcement.anncmntOrganization == "") {
        alert("Your input is invalid");
      } else {
        announcement.anncmnt = this.anns;
        announcement.anncmntID = this.anns.anncmntId;
        this.voluntarinessAnnService.editAnn(announcement)
          .subscribe(res => {
            alert("Announcement is edited!")
          }, (err) => {
            console.log(err);
            alert(err.error);
          });
      }
    }
    this.isEditable = false;
  }
}
