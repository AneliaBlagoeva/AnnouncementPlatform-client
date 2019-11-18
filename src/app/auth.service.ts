import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { RegisterUser } from './models/registeruser.model';

const apiUrl = 'http://localhost:8080/api/auth/';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 isLoggedIn = false;
redirectUrl: string;

constructor(private http: HttpClient) { }

login(data: any,pass: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/auth/login', {email: data,password: pass})
      .pipe(
        map(user => {
        console.log(user);
        if (user && user.accessToken) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
       }),
       tap(_ => this.isLoggedIn = true)
       );
  }

  logout(): Observable<any> {
    return this.http.get<any>(apiUrl + 'signout')
      .pipe(
        tap(_ => this.isLoggedIn = false),
        catchError(this.handleError('logout', []))
      );
  }

  register(fullName: any, em: any, pass: any, lastname: any, phone: any, c: any, cntry: any, age: any): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.post<RegisterUser>('http://localhost:8080/api/auth/register', {email : em, fName : fullName, lName: lastname , age: age, city : c, phone : phone, country: cntry, password : pass, role: {
                description: 'USER'
            }})
      .pipe(
        tap(_ => this.log('register')),
        catchError(this.handleError('register', []))
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