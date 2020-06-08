import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login.service'

import { map, filter, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email;
  public password;
  public userdata;
  public emailOrPassowrdInvalid = false;
  
  public isHeader:boolean

  public isUserHeader:boolean

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  loginUser() {
    //console.log(this.email, this.password)
    this.loginService.login(this.email, this.password).subscribe(user => {
        if (user.length) {

          for (let userdetails of user) {
          
          //console.log(userdetails.name);

          this.userdata = userdetails.name;

        

      }
          
          this.router.navigate(['/user']);
        } else {
          this.emailOrPassowrdInvalid = true;
        }
      });
  }

  
  Logout(){

    localStorage.setItem('currentUser', null);

  }

}
