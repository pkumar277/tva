import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { Person } from '../person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
   @Input() username: string;
   @Input() name: string;
   @Input() role: string;
   @Input() Email: string;
   @Input() id: string;
  model: any = {};
  edituserform: FormGroup;
  selected = 'option0';
  modalVisible = true;
  modalSuccess = false;
  submitted = false;
  user;
  userid: string;
  persons: Person[] = [];
  constructor(private formBuilder: FormBuilder, private http: HttpClient ) { }

  ngOnInit() {

    this.edituserform = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }


  get f() { return this.edituserform.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.edituserform.invalid) {
      this.modalSuccess = false;
      return;

    } else{
      this.modalVisible = false;
      this.modalSuccess = true;
    }
    this.http.patch('http://localhost:3000/users/' + this.id,
    {name: this.edituserform.value.name,
      email: this.edituserform.value.email,
      role: this.edituserform.value.role, password: this.edituserform.value.password})
  .subscribe(persons => { console.log(persons); });


  }
  onReset() {
    this.submitted = false;
    this.edituserform.reset();
  }
}
