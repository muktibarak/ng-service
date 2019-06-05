import { Component, OnInit } from '@angular/core';
import { Photos } from '../model/photo.interface';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photoNumber: number=1;
  photos: Photos[];
  photo: Photos;
  constructor(
    private photoService: PhotoService
  ) { }

  
  ngOnInit() {
     this.photoService.getPhoto(this.photoNumber).subscribe(photo => {
     this.photo = photo;
     });
}
 onPrev() {
   this.photoNumber--;
   this.photoService.getPhoto(this.photoNumber).subscribe(photo => {
     this.photo = photo;
   })
 }
 onNext() {
   this.photoNumber++;
   this.photoService.getPhoto(this.photoNumber).subscribe(photo => {
     this.photo = photo;
   })
 }
}
