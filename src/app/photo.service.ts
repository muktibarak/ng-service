import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photos } from './model/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
 
    constructor(
    private httpClient: HttpClient
  ) { }

  getPhotos(): Observable<Photos> {
    return this.httpClient.get<Photos>('https://jsonplaceholder.typicode.com/photos');
  }
  getPhoto(photoNumber: number): Observable<Photos> {
  return this.httpClient.get<Photos>('https://jsonplaceholder.typicode.com/photos/'+photoNumber);
  }
  postPhotos(photo: Photos): Observable<Photos> {
    return this.httpClient.post<Photos>('https://jsonplaceholder.typicode.com/photos', photo);
  }
}
