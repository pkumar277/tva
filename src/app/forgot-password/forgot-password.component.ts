import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { map, filter, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  public email;
  public password;
  public invalidEmail = false;
  public modalVisible = true;
  public modalSuccess = false;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  constructor(private loginService: LoginService, private router: Router) {

  }

  OnInit(){

  }

  ForgotPassword() {
    //console.log(this.email)
    this.loginService.forgot(this.email).subscribe(user => {
      
        if (user.length) {
          //console.log(user.email + '' + user.password)
          //console.log(user)
          this.modalVisible = false;
          this.modalSuccess = true;
        } else {
          this.invalidEmail = true;
          
        }
      });
  }
  

}
