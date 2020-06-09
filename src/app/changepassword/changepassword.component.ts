import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { LoginService } from '../../services/login.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Person } from '../person';
import { HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],

})
export class ChangepasswordComponent implements OnInit {
  model: any = {};
  userdata: string;
  userid: string;
  changepasswordform: FormGroup;
  submitted = false;
  danger_numeric: boolean = false;
  danger_specialChar: boolean = false;
  confirmDisabled: boolean= true;
  danger_alpha:boolean = false;
  modalVisible = true;
  modalSuccess = false;
  persons: Person[] = [];
  oldpass = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private loginservice: LoginService) { }

  ngOnInit() {
    this.userdata = this.loginservice.currentUserValue.password;
    this.userid = this.loginservice.currentUserValue.id;
    console.log(this.userdata);
    this.changepasswordform = this.formBuilder.group({
        OldPassword: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
}
checkoldPassword(str: any){


}


checkPassword(str: any){
  var regEx = /^(?=(?:[^a-z]*[a-z]){2})(?=(?:[^A-Z]*[A-Z]){2})(?=(?:[^0-9]*[0-9]){2})(?=.*[!-\/:-@\[-`{-~]).{8,}$/i;
  var regNum = /([0-9])/;
  var regAlpha= /([a-z])/;
  var regAlphaCaps= /([A-Z])/;
  var regChar = /([!@#$%^&*()~_])/;
  var regAlphaNum= /([a-z,A-Z,0-9])/;
  if(regEx.test(str)) {
    this.confirmDisabled=false;

  }

if(regNum.test(str)) {
  this.danger_numeric = false;
}
else{
  this.danger_numeric  = true;

}
if(regChar.test(str)) {
  this.danger_specialChar = false;
}
else{
  this.danger_specialChar  = true;

}
if((regAlpha.test(str)) && (regAlphaCaps.test(str))) {
  this.danger_alpha = false;
}
else{
  this.danger_alpha = true;
}

}
get f() { return this.changepasswordform.controls; }
  onSubmit(): Observable<any> {
    this.submitted = true;
    // stop here if form is invalid
    if (this.changepasswordform.invalid || this.changepasswordform.value.OldPassword !== this.userdata) {
      this.oldpass = true;
      this.modalSuccess = false;
        return;

    }
    else{
      this.oldpass = false;
      this.modalVisible = false;
      this.modalSuccess = true;

    }
    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.changepasswordform.value, null, 4));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    //this.updatedRow= this.persons.filter(_ => this.userid);

      this.http.post('http://localhost:3000/users/' + this.userid, httpOptions)
          .map((response:Response) => response.json())
        .subscribe(persons =>{
          this.userdata = this.changepasswordform.value.password;
        console.log(this.userdata);
      })

/*
this.http.post<any>('http://localhost:3000/users/' + this.persons.id)
.map((response:Response) => response.json())
.subscribe(persons => {
  console.log(persons);
  this.userdata = this.changepasswordform.value.password;
  console.log(this.changepasswordform.value.password)
  console.log(this.userdata);
})

*/
}
onReset() {
  this.submitted = false;
  this.changepasswordform.reset();
}





}
