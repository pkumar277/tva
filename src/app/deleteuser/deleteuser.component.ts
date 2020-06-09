import { Person } from '../person';
import { Component, OnInit, Input } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  selectedRow: Person[];
  @Input() username: string;
  @Input() id: string;
  persons: Person[] = [];
  constructor(private http: Http) { }

  ngOnInit() {
  }


 /// deleteRowSelected(){
    //debugger
      // this.http.delete('http://localhost:3000/users/' + this.id)
       ///    .map((response:Response) => response.json())
       //  .subscribe(person =>{
       //  console.log(person)
      // })
  // }
}
