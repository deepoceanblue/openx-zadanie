import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { ToolsService } from '../services/tools.service';

import { Post } from '../classes/post';
import { User } from '../classes/user';


@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
  posts: Post[];
  post: Post;
  users: User[];
  user: User;

  duplicateTitles: string[];
  ifCheckedDuplicateTitles = false;

  private userNames = [];
  private postsPerUser = [];
  postsPerUserMsg = [];

  private userLocations = [];
  closestNeighbours = [];
  currentClosestUser: number;

  constructor(
    private api: ApiService,
    private tools: ToolsService,
  ) {
  }

  ngOnInit(): void {
    this.api
      .getUsers()
      .then(users => this.users = users)
      .then(() => this.users.forEach(
        (u) => {
          if (!u.id) {
            throw new SyntaxError('malformed user data: no id');
          }
          if (!u.name) {
            throw new SyntaxError('no name for user ${u.id}');
          } else {
            this.userNames[u.id] = u.name;
          }
          if (!u.address.geo) {
            throw new SyntaxError(`no geo data for user ${u.id}`);
          } else {
            this.userLocations[u.id] = u.address.geo;
          }
        }
      ))
      .finally(() => console.log(`fetched data for ${this.users.length} users`));
    this.api
      .getPosts()
      .then(posts => this.posts = posts)
      .finally(() => console.log(`fetched data for ${this.posts.length} posts`));
      /* .finally(() => this.posts.push({id: 101, title: 'qui est esse', body: 'the title is duplicate', userID: 1})) // DEBUG */
  }

  findDuplicateTitles() {
    this.duplicateTitles = this.tools.findDuplicateValues(this.posts, 'title');
    this.ifCheckedDuplicateTitles = true;
  }

  private countPerUser(items) {
    return this.tools.countPerUser(items);
  }

  listPostsPerUser() {
    // separated from actual messages on purpose
    // index is user id, value is post no
    this.postsPerUser = this.countPerUser(this.posts);
    this.postsPerUser.forEach((p, u) => this.postsPerUserMsg[u] = `użytkownik/-czka ${this.userNames[u]} napisał(a) ${p} postów`);
  }

  findClosestUser(userId) {
    if (userId === 'default') { return false; }
    this.closestNeighbours[userId] = (this.closestNeighbours[userId] !== undefined)
                                     ? this.closestNeighbours[userId]
                                     : this.tools.calculateGeoDistance(this.userLocations, userId);
    this.currentClosestUser = this.userNames[this.closestNeighbours[userId]];
  }
}
