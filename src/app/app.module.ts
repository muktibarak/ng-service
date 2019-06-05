import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { AlbumsComponent } from './albums/albums.component';
import { PostService } from './post.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CommentService } from './comment.service';
import { AlbumService } from './album.service';
import { PhotoComponent } from './photo/photo.component';
import { PhotoService } from './photo.service';
import { PhotolinkComponent } from './photolink/photolink.component';
import { PhotolinkService } from './photolink.service';



//import { HttpClient } from 'selenium-webdriver/http';



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    AlbumsComponent,
    NavbarComponent,
    PhotoComponent,
    PhotolinkComponent
    
    
    //HttpClient,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  providers: [
    PostService,
    CommentService,
    AlbumService,
    PhotoService,
    PhotolinkService
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
