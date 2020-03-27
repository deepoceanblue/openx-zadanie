import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private urlRoot = 'https://jsonplaceholder.typicode.com'
  private postsUrl = `${this.urlRoot}/posts`;
  private usersUrl = `${this.urlRoot}/users`;

  constructor(
    private http: HttpClient,
  ) { }


  getPosts(): Promise<Post[]> {
    return this.http
            .get(this.postsUrl)
            .toPromise()
            .then(response => response as Post[])
            ;
  }
  getUsers(): Promise<User[]> {
    return this.http
            .get(this.usersUrl)
            .toPromise()
            .then(response => response as User[])
            ;
  }

}
