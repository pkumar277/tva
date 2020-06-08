import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class myService {
  public firstName:string; 
  public lastName:string;
  public userName:string;
  public password1:string;
  public newPswrd:string;
  public cfrmPswrd:string;
  public designation:string;
  public phoneNo:number;
  public zipNo:number;
  public email:string;
  public homeAddress:string;
  public Occupation:string;
  public companyName:string;
  public employmentTenure:string;
  public businessType:string;
  public businessName:string;    
  public annualTurnover:string;
  public educationCourse:string;  
  public annualasalaryRange:string;
  public typeEmployement:string;
  public city:string;
  
  
  constructor(){
      }
  setFirstName (data) {
    this.firstName = data;
  }
  getFirstName () {
    return this.firstName;
  }
  setLastName (data) {
    this.lastName = data;
  }
  getLastName () {
    return this.lastName;
  }
  setUserName (data) {
    this.userName = data;
  }
  getUserName () {
    return this.userName;
  }
  setPassword (data) {
    this.password1 = data;
  }
  getPassword () {
    return this.password1;
  }


  setNewPswrd(data) {
    this.newPswrd = data;
  }
  getNewPswrd () {
    return this.newPswrd;
  }



  setCfrmPswrd (data) {
    this.cfrmPswrd = data;
  }
  getCfrmPswrd() {
    return this.cfrmPswrd;
  }


  setDesignation(data){
    this.designation = data;
  }
  getDesignation(){
    return this.designation;
  }
  setZipNo(data) {
    this.zipNo = data;
  }
  
  getZipNo () {
    return this.zipNo;
  }
  setPhoneNo (data) {
    this.phoneNo = data;
  }
  
  getPhoneNo () {
    return this.phoneNo;
  }
  setEmail (data) {
    this.email = data;
  }
  getEmail () {
    return this.email;
  }
  setHomeAddress (data) {
    this.homeAddress = data;

  }
  
  getHomeAddress () {
    return this.homeAddress;
  }
  
  setAnnualTurnover (data) {
    this.annualTurnover = data;
  }
  getAnnualTurnover () {
    return this.annualTurnover;
  }
  
  setBusinessType (data) {
    this.businessType = data;
  }
  getBusinessType () {
    return this.businessType;
  }
  setBusinessName (data) {
    this.businessName = data;
  }
  getBusinessName () {
    return this.businessName;
  }
  setEducationCourse (data) {
    this.city = data;
  }
  getEducationCourse () {
    return this.city;
  }
  setCompanyName (data) {
    this.companyName = data;
  }
  getCompanyName () {
    return this.companyName;
  }
 setEmploymentTenure (data) {
    this.employmentTenure = data;
  }
  getEmploymentTenure () {
    return this.employmentTenure;
  }
    
}