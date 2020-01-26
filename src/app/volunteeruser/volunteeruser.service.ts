import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { VolunteerUser } from '../models/volunteeruser.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VolunteerUserService {

  constructor(private http: HttpClient) { }

  private userUrl = '//localhost:8080/api/userVolunteerAttributes';

  getUsers(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get(this.userUrl + '/' + email);
  }

  public deleteUser(email: string) {
    return this.http.delete(this.userUrl + '/' + email);
  }

  public createUser(volunteerattributes: VolunteerUser) {
    return this.http.post<VolunteerUser>(this.userUrl, volunteerattributes);
  }

  public editUser(volunteerattributes: VolunteerUser) {
    return this.http.put<VolunteerUser>(this.userUrl, volunteerattributes);
  }
}
