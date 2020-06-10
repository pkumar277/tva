import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { Person } from '../person';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  model: any = {};
  createuserform: FormGroup;
  selected = 'option0';
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.createuserform = this.formBuilder.group({
      Name: ['', Validators.required],
      Username: ['', Validators.required],
      Email: ['', Validators.required],
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


  }


  onReset() {
    this.submitted = false;
    this.createuserform.reset();
  }

}
