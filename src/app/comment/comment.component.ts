import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comments } from '../model/comment.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  disablePrev: boolean = true;
  disableNext: boolean = false;
  commentNumber: number=1;
  comments: Comment[];
  comment: Comments;
  
  
  constructor(
    private commentService: CommentService
  ) { }


  ngOnInit() {
    
    this.commentService.getComment(this.commentNumber).subscribe(comment => {
      this.comment = comment;
    });
  }

onPrev() {
    this.commentNumber--;
    if (this.commentNumber <= 1) {
      this.disablePrev = true;
    }
    if (this.commentNumber < 50) {
      this.disableNext = false;
    }
    this.commentService.getComment(this.commentNumber).subscribe(comment => {
      
    this.comment = comment;
    
  });
}

onNext() {
  this.commentNumber++;
  if (this.commentNumber >1) {
    this.disablePrev = false;
  }
  if (this.commentNumber >49) {
    this.disableNext = true;
  }
  this.commentService.getComment(this.commentNumber).subscribe(comment => {
    this.comment = comment;
});
}}
