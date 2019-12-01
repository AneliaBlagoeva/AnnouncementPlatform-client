import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobAnnouncement } from '../models/jobannouncement.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class JobAnnouncementService {
  router: any;

  constructor(private http: HttpClient) { }

  private userUrl = '//localhost:8080/api/job';

  getJobAnnouncements(): Observable<any> {
    return this.http.get('//localhost:8080/api/jobs');
  }

  public editAnn(announcement: JobAnnouncement) {
    return this.http.put<JobAnnouncement>(this.userUrl, announcement);
  }
}
