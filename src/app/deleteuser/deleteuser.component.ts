import { Person } from '../person';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  selectedRow: Person[];
  @Input() name: string;
  @Input() id: string;
  @Input () clientName: string;
  persons: Person[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

  console.log(this.clientName);
  }


  deleteRowSelected(){
      this.http.delete('http://localhost:3000/users/' + this.id)
       .subscribe(person => {
       console.log(person);
     });
  }
}
