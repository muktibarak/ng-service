import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Albums } from '../model/album.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {


  albumNumber: number=1;
  albums: Albums[];
  album: Albums;

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.albumService.getAlbum(this.albumNumber).subscribe(album => {
      this.album = album;
    });
  }
onPrev() {
  this.albumNumber--;
  this.albumService.getAlbum(this.albumNumber).subscribe(album => {
    this.album = album;
  });
}
onNext() {
  this.albumNumber++;
  this.albumService.getAlbum(this.albumNumber).subscribe(album => {
    this.album = album;
  });
}}
