import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Person } from '../person';
import 'rxjs/add/operator/map';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/catch';
import { User } from '../user';
import { LoginService } from '../../services/login.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdata: string;
   name: string;
   username: string;
   email: string;
   accountName: string;
   clientName: string;
   role: string;
   dtOptions: DataTables.Settings = {};
   persons: Person[] = [];
   userList: any;
   users: User[];
   id: number;
   errorVisible: false;
   dtTrigger: Subject<any> = new Subject<any>();
   service: any;
  constructor(private http: Http, private loginservice: LoginService) { }

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

    dom: '<"top"if>rt<"bottom"lp><"clear">',
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

    this.userdata = this.loginservice.currentUserValue.username;

  };

private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  onSelect(selectedItem: any) {
    this.name = selectedItem.name;
    this.id = selectedItem.id;
    this.clientName = selectedItem.clientName;

  }

  onSelectedit(selectedItem: any) {
    this.name = selectedItem.name;
    this.username = selectedItem.username;
    this.id = selectedItem.id;
    this.role = selectedItem.role;
    this.email = selectedItem.email;

  }
}
