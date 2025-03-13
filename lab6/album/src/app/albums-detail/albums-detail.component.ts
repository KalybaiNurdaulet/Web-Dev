// album-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../albums.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album: Album | undefined;
  albumTitle: string = ''; // Use this for the editable input
  albumId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadAlbum();
  }

  loadAlbum(): void {
    this.albumsService.getAlbum(this.albumId).subscribe(album => {
      this.album = album;
      this.albumTitle = album.title; // Initialize the input field
    });
  }

  saveAlbum(): void {
    if (this.album) {
      const updatedAlbum: Album = { ...this.album, title: this.albumTitle }; // Update the title
      this.albumsService.updateAlbum(this.albumId, updatedAlbum).subscribe(() => {
        this.loadAlbum(); // Refresh the data
      });
    }
  }

  goToPhotos(): void {
    this.router.navigate(['/albums', this.albumId, 'photos']);
  }

  goBack(): void {
    this.router.navigate(['/albums']); // Or use history.back() if appropriate
  }
}