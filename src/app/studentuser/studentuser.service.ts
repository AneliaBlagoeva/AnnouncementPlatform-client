import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StudentUser } from '../models/studentuser.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentUserService {

  constructor(private http: HttpClient) { }

  private userUrl = '//localhost:8080/api/userSchoralshipAttributes';

  getUsers(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get(this.userUrl + '/' + email);
  }

  public deleteUser(email: string) {
    return this.http.delete(this.userUrl + '/' + email);
  }

  public createUser(studentattributes: StudentUser) {
    return this.http.post<StudentUser>(this.userUrl, studentattributes);
  }

  public editUser(studentattributes: StudentUser) {
    return this.http.put<StudentUser>(this.userUrl, studentattributes);
  }

}
