import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VolunteerAnnouncement } from '../models/volunteerannouncement.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class VolunteerAnnouncementService {
  router: any;

  constructor(private http: HttpClient) { }

  private userUrl = '//localhost:8080/api/voluntariness';

  getVolAnnouncements(): Observable<any> {
    return this.http.get('//localhost:8080/api/voluntarinesses');
  }

  getVoluntarinessById(id : Number) : Observable<any>{
    return this.http.get((this.userUrl + '/' + id));
  }
  
  public editAnn(announcement: VolunteerAnnouncement) {
    return this.http.put<VolunteerAnnouncement>(this.userUrl, announcement);
  }
}
