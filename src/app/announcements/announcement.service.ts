import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}
