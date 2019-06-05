import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments } from './model/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getComments(): Observable<Comments> {
    return this.httpClient.get<Comments>('https://jsonplaceholder.typicode.com/comments');
  }

  getComment(commentNumber: number): Observable<Comments> {
    return this.httpClient.get<Comments>('https://jsonplaceholder.typicode.com/comments/'+commentNumber);
}
}
