import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  router: any;

  constructor(private http: HttpClient) { }

  private userUrl = '//localhost:8080/api/user';

  getUsers(): Observable<any> {
    return this.http.get('//localhost:8080/api/users');
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get(this.userUrl + '/' + email);
  }

  public deleteUser(user: User) {
    return this.http.delete(this.userUrl + '/' + user.email);
  }

  public createUser(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

  public editUser(user: User) {
    return this.http.put<User>(this.userUrl, user);
  }

}