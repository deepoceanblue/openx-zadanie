import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';

import { Post } from '../classes/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: Post[];
  post: Post;

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.api
      .getPosts()
      .then(posts => this.posts = posts)
      /* .finally(() => this.posts.push({id: 101, title: 'qui est esse', body: 'the title is duplicate', userID: 1})) // DEBUG */
  }

}
