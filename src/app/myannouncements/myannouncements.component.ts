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
    if(confirm("Are you sure you want to delete?")){
    this.annService.deleteAnn(announcement)
      .subscribe( data => {
        this.anns = this.anns.filter(u => u !== announcement);
      });
    }
  }
  
  onOptionsSelected(event){
    console.log(event); //option value will be sent as event
   }

  save(announcement: Announcement) {   
    if(confirm("Are you sure you want to save?")){
    let regexpUrl = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$');
    if(!regexpUrl.test(announcement.url) || announcement.anncmntName==""
    || announcement.url=="")
    {
      alert("Your input is not valid!")
    }else{
    this.annService.editAnn(announcement)
      .subscribe(res => {
      alert("Announcement is edited!")
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
    }
    this.isEditable=false;
  }
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
