import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userdata: string;

  constructor(private loginservice: LoginService) { }

  ngOnInit() {

   
    this.userdata = this.loginservice.currentUserValue.username;
    //console.log('data' + '' + this.userdata);
}



  Logout(){

    localStorage.setItem('currentUser', null);

  }


}