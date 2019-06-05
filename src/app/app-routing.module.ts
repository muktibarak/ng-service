import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotolinkComponent } from './photolink/photolink.component';




const routes: Routes = [
  {path:'posts', component: PostComponent},
  {path:'comments', component: CommentComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'photos', component: PhotoComponent},
  {path: 'photos/:id', component: PhotolinkComponent}
  //{path: 'photos/:url', component: PhotolinkComponent}
  // for passing two parameters
  //{path: 'photos/:id/:url', component: PhotolinkComponent}
  //{path: '**', component: PageNotFound}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
