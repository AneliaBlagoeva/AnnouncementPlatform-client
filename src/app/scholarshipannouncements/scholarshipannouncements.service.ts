import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScholarshipAnnouncement } from '../models/scholarshipannouncement.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class ScholarshipAnnouncementService {
  router: any;

  constructor(private http: HttpClient) { }

  private userUrl = '//localhost:8080/api/scholarship';

  getScholarshipAnnouncements(): Observable<any> {
    return this.http.get('//localhost:8080/api/scholarships');
  }

  public editAnn(announcement: ScholarshipAnnouncement) {
    return this.http.put<ScholarshipAnnouncement>(this.userUrl, announcement);
  }

  getScholarshipById(id : Number) : Observable<any>{
    return this.http.get((this.userUrl + '/' + id));
  }
}
