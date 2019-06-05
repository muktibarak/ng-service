import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albums } from './model/album.interface';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAlbums(): Observable<Albums> {
    return this.httpClient.get<Albums>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(albumNumber: number): Observable<Albums> {
    return this.httpClient.get<Albums>('https://jsonplaceholder.typicode.com/albums/'+albumNumber);
  }
}

