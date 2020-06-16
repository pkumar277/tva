import { Person } from '../person';
import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  model: any = {};
  selectedRow: Person[];
  @Input() name: string;
  @Input() id: string;
  @Input () clientName: string;
  persons: Person[] = [];
  @Output() changeEvent = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  deleteRowSelected() {
    this.changeEvent.emit (this.clientName);
    //console.log(this.clientName);
    if ( this.clientName === undefined) {
      this.http.delete('http://localhost:3000/users/' + this.id)
       .subscribe(person => {
       //console.log(person);
     });
    }  else {

  }
  }
}
