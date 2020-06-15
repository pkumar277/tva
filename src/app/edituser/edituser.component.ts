import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { Person } from '../person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
   @Input() username: string;
   @Input() name: string;
   @Input() role: string;
   @Input() email: string;
   @Input() id: number;
  model: any = {};
  edituserform: FormGroup;
  selected = 'option1';
  submitted = false;
  userid: string;
  persons: Person[] = [];
  modalVisible1 = true;
  modalSuccess1 = false;
  user;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router  ) { }

  ngOnInit() {

    this.edituserform = this.formBuilder.group({
      name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
  });
  }


  get f() { return this.edituserform.controls; }
  onSubmit() {
    this.submitted = true;

    if (this.edituserform.invalid) {
      this.modalVisible1 = true;
      this.modalSuccess1 = false;
      return;

    }   else {
      this.modalVisible1 = false;
      this.modalSuccess1 = true;
     }
     this.user=this.edituserform.value.Name;
    this.http.patch('http://localhost:3000/users/' + this.id,
    {name: this.edituserform.value.name,
      email: this.edituserform.value.Email,
      role: this.edituserform.value.role,
      password: this.edituserform.value.password})
  .subscribe(persons => { console.log(this.edituserform.value.role); });


  }
  onReset() {
    this.submitted = false;
    this.edituserform.reset();
  }
}
