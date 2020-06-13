import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { Person } from '../person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  model: any = {};
  createuserform: FormGroup;
  selected = 'option0';
  modalVisible = true;
  modalSuccess = false;
  submitted = false;
  user;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {


    this.createuserform = this.formBuilder.group({
      Name: ['', Validators.required],
      Username: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f() { return this.createuserform.controls; }


  onSubmit(){
    this.submitted = true;
    if (this.createuserform.invalid) {
      this.modalSuccess = false;
      return;

    } else {
      this.modalVisible = false;
      this.modalSuccess = true;
    }
  ///alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.createuserform.value, null, 4));
  this.user=this.createuserform.value.Name;

  this.http.post('http://localhost:3000/users/',
  {name: this.createuserform.value.Name, username: this.createuserform.value.Username, email: this.createuserform.value.Email, role: this.createuserform.value.role, password: this.createuserform.value.password})
  .subscribe(persons => { console.log(persons); });

  }
  onReset() {
    this.createuserform.reset();
  }



}
