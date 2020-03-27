import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { ApiService } from '../services/api.service';
import { ToolsService } from '../services/tools.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[];
  private user: User;

  constructor(
    private api: ApiService,
    private tools: ToolsService,
  ) { }

  ngOnInit() {
    this.api.getUsers().then(users => this.users = users); 
  }

}
