import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { Person } from '../person';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
   @Input() UserName: string;
   @Input() Name: string;
   @Input() role: string;
   @Input() Email: string;
  model: any = {};
  edituserform: FormGroup;
  selected = 'option0';
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.edituserform = this.formBuilder.group({
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


  get f() { return this.edituserform.controls; }
  onSubmit() {
    this.submitted = true;
  }
  onReset() {
    this.submitted = false;
    this.edituserform.reset();
  }
}
