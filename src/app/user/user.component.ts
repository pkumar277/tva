import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Person } from '../person';
import 'rxjs/add/operator/map';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/catch';
import { User } from '../user';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   name: string;
   username: string;
   email: string;
   accountName: string;
   role: string;
   dtOptions: DataTables.Settings = {};
   persons: Person[] = [];
   userList: any;
   users: User[];
   dtTrigger: Subject<any> = new Subject<any>();
   service: any;
  constructor(private http: Http) { }

  ngOnInit(): void {
    this.dtOptions = {
      searching: true,
      pagingType: 'simple_numbers',
      language: {
		    lengthMenu: 'Records per page _MENU_',
        info: "_TOTAL_ Users",
        infoEmpty: "No Records Found",
        search: '<i class="fa fa-filter" aria-hidden="true"></i>',
        searchPlaceholder: 'Search User',
        infoFiltered: '',
        zeroRecords:  "Sorry, no record were found. Please adjust your search criteria and try again. ",
          paginate: {
            previous: '<span class="bg-previous"></span>',
            next: '<span class="bg-next"></span>',
            first:'',
            last:'',
            }
},

    dom: '<"top"i<"createuser">f>rt<"bottom"lp><"clear">',
    paging:   true,
    ordering: true,
    info:     true,
    lengthChange: false,
    columnDefs: [ {
      targets: [5,6,7,8],
      orderable: false
      } ]

    };
    this.http.get('http://localhost:3000/users')
    .map(this.extractData)
    .subscribe(persons => {
      this.persons = persons;
      console.log(persons);
      this.dtTrigger.next();
    })

  };

private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }


}
