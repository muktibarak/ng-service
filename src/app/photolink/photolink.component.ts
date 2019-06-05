import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotolinkService } from '../photolink.service';
import { photolink } from '../model/photolink.interface';


@Component({
  selector: 'app-photolink',
  templateUrl: './photolink.component.html',
  styleUrls: ['./photolink.component.css']
})
export class PhotolinkComponent implements OnInit {

  photolink: photolink;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private photolinkService: PhotolinkService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(pmap => {
      //console.log('pmap:', pmap.keys);
       console.log('pmap:', typeof pmap.get('id'));
      //console.log('pmap: ', pmap.get('id'));
     
      // for passing two parameters, add another console.log
     
      // for passing two parameters change the the statement below
      // this.photolinkService.getPhotolink(pmap.get('id')).subscribe(photolink => {
        //console.log(photolink);
        // this.photolink = photolink;
      this.photolinkService.getPhotolink(pmap.get('id')).subscribe(photolink => {
        this.photolink = photolink;
        
      
      });
     
    });
    

  }
    
  onBack() {
      this.router.navigate(['/photos']);
    }
    
  
}
