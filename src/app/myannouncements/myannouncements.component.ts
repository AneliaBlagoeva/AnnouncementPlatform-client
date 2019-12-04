import { Component, OnInit } from '@angular/core';
import { Announcement } from '../models/announcement.model';
import { Router } from '@angular/router';
import { AnnouncementService } from '../announcements/announcement.service';

@Component({
  selector: 'app-myannouncements',
  templateUrl: './myannouncements.component.html',
  styleUrls: ['./myannouncements.component.css']
})

export class MyAnnouncementsComponent implements OnInit {
anns: Announcement[];
  isEditable: boolean;

  constructor(
    private router: Router,
    private annService: AnnouncementService) {}

  ngOnInit() {
    let em = localStorage.getItem('currentUserEmail');
    this.annService.getAnnouncementsByEmail(em.substring(1, em.length - 1))
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
      //  this.router.navigate(['viewProfile']);
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }

   
  public editJob(announcement) {
    this.router.navigate(['/myJobAnnouncements', {anns:JSON.stringify(announcement)}]);
  }

  public editScholarship(announcement) {
    this.router.navigate(['/myScholarshipAnnouncements', {anns:JSON.stringify(announcement)}]);
  }

  public editVolunteer(announcement) {
    this.router.navigate(['/myVoluntarinessAnnouncements', {anns:JSON.stringify(announcement)}]);
  }
}
