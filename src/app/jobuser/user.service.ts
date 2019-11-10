import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JobUser } from '../models/jobuser.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl = '//localhost:8080/api/userJobAttributes';

  getUsers(): Observable<any> {
    return this.http.get('//localhost:8080/api/userJobAttributes');
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get(this.userUrl + '/' + email);
  }

  public deleteUser(email: string) {
    return this.http.delete(this.userUrl + '/' + email);
  }

  public createUser(userjobattributes: JobUser) {
    return this.http.post<JobUser>(this.userUrl, userjobattributes);
  }

}