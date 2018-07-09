import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;


  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.users = this._http.get('https://jsonplaceholder.typicode.com/users')
    
  }

}
