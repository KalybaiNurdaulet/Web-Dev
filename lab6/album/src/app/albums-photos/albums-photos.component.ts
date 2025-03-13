// album-photos.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Photo } from '../albums.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './albums-photos.component.html',
  styleUrls: ['./albums-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  photos: Photo[] = [];
  albumId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.albumsService.getPhotos(this.albumId).subscribe(photos => {
      this.photos = photos;
    });
  }

  goBack(): void {
      this.router.navigate(['/albums', this.albumId]);
  }
}