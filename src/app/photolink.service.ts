import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { photolink } from './model/photolink.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotolinkService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getPhotolinks(): Observable<photolink> {
    return this.httpClient.get<photolink>('https://jsonplaceholder.typicode.com/photos');
  }
  getPhotolink(id: string): Observable<photolink> {
    return this.httpClient.get<photolink>('https://jsonplaceholder.typicode.com/photos/'+id);
  }
  
}
