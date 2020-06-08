import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

import { map, filter, tap, first } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LoginService {
  baseUrl = "http://localhost:3000/users";
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public getMockUsers(): Observable<any> {
    return this.http.get(this.baseUrl)
  }


  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(email, password) {
    //this.currentUser = this.currentUserSubject.asObservable();
    return this.getMockUsers().pipe(
      first(),
      map(users => users.filter(user => {
        if (user.password == password && user.email == email) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }
        return;
      })

      )
    )
  }

  
  forgot(email) {
    //this.currentUser = this.currentUserSubject.asObservable();
    return this.getMockUsers().pipe(
      first(),
      map(users => users.filter(user => {
        if ( user.email == email) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }
        return;
      })

      )
    )
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}