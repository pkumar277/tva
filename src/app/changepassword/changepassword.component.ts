import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],

})
export class ChangepasswordComponent implements OnInit {
  model: any = {};
  changepasswordform: FormGroup;
  submitted = false;
  danger_numeric: boolean = false;
  danger_specialChar: boolean = false;
  confirmDisabled: boolean= true;
  danger_alpha:boolean = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.changepasswordform = this.formBuilder.group({
        OldPassword: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
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

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.changepasswordform.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.changepasswordform.value, null, 4));
}
onReset() {
  this.submitted = false;
  this.changepasswordform.reset();
}
}
