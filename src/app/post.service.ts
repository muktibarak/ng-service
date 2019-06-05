import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from './model/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts(): Observable<Posts> {
     return this.httpClient.get<Posts>('https://jsonplaceholder.typicode.com/posts');
  }
  getPost(postNumber: number): Observable<Posts> {
    return this.httpClient.get<Posts>('https://jsonplaceholder.typicode.com/posts/'+postNumber);
}
  postPosts(post: Posts): Observable<Posts> {
    return this.httpClient.post<Posts>('https://jsonplaceholder.typicode.com/posts', post);
  }
  //getNames(): Observable<any> {
   // return this.httpClient.get<any>('http://localhost:8080/welcome/getNames');
  //}
}
