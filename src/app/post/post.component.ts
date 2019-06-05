import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Posts } from '../model/post.interface';

import { HttpResponseBase } from '@angular/common/http';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postNumber: number=1;
  posts: Posts[];
  post: Posts;
  //names: names;
  
  constructor(
    private postService: PostService
    
    
  ) {
    
   }

  ngOnInit() {
    //this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      //this.posts = data;
      //console.log(this.posts);
      //this.postService.getPosts().subscribe(posts =>{
       // this.posts = posts;
      //});
    this.postService.getPost(this.postNumber).subscribe(post => {
     this.post = post;
   });
    //this.postService.getNames().subscribe(names => {
      //console.log(names);
     // this.names = names;
    //});
  }
 
      onPrev() {
        this.postNumber--;
        this.postService.getPost(this.postNumber).subscribe(post =>{
        this.post = post;
        });
      }
        
      onNext() {
        this.postNumber++;
        this.postService.getPost(this.postNumber).subscribe(post =>{
        this.post = post;
        });

        
      
      }}
