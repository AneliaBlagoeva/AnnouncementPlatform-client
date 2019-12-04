import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Announcement } from '../models/announcement.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AnnouncementService {
  router: any;

  constructor(private http: HttpClient) { }

  private userUrl = '//localhost:8080/api/announcement';

  getAnnouncements(): Observable<any> {
    return this.http.get('//localhost:8080/api/announcements');
  }

  public deleteAnn(announcement: Announcement) {
    return this.http.delete(this.userUrl + '/' + announcement.anncmntId);
  }

  public editAnn(announcement: Announcement) {
    return this.http.put<Announcement>(this.userUrl, announcement);
  }

  public createAnn(announcement: Announcement) {
    return this.http.post<Announcement>(this.userUrl, announcement);
  }

  getAnnouncementsByEmail(email: String): Observable<any> {
    return this.http.get(this.userUrl + '/email/' + email);
  }

  getAnnouncementsById(id: Number): Observable<any> {
    return this.http.get(this.userUrl + '/' + id);
  }
}
