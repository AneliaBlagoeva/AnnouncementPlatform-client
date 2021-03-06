import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, catchError, map, mapTo } from 'rxjs/operators';
import { User } from './models/user.model';

const apiUrl = 'http://localhost:8080/api/auth/';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  redirectUrl: string;

  constructor(private http: HttpClient) { }

  login(data: any, pass: any): Observable<any> {
    return this.http.post<User>('http://localhost:8080/api/auth/login', { email: data, password: pass })
      .pipe(
        map(user => {
          console.log(user);
          if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        }),
        tap(_ => this.getLoggedInName.emit(true))
      );
  }

  
  logout(): Observable<any> {
    return this.http.get<any>(apiUrl + 'signout')
      .pipe(
        tap(_ => this.getLoggedInName.emit(false)),
        catchError(this.handleError('logout', []))
      );
  }

  register(fullName: any, em: any, pass: any, lastname: any, phone: any, c: any, cntry: any): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>('http://localhost:8080/api/auth/register', {
      email: em, fName: fullName, lName: lastname, city: c, phone: phone, country: cntry, password: pass, role: {
        id: 2
      }
    })
      .pipe(
        tap(_ => this.log('register')),
        catchError(this.handleError('register', []))
      );
  }

  changePass(em: any, pass: any): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>('http://localhost:8080/api/auth/changePass', {
      email: em, password: pass
    })
      .pipe(
        tap(_ => this.log('changepass')),
        catchError(this.handleError('changepass', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
