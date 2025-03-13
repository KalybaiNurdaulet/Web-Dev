import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../albums.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  imports:[CommonModule,FormsModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];

  newAlbumTitle: string = '';
  creatingNewAlbum: boolean = false;

  constructor(private albumsService: AlbumsService, private router: Router) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

  // Скрываем элемент, а не удаляем его
  hideAlbum(id: number): void {
    // Находим альбом по ID
    const albumToHide = this.albums.find(album => album.id === id);
 
    if (albumToHide) {
       albumToHide.isHidden = true;  // Помечаем альбом как скрытый
    }
  }

  goToDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  startCreateNewAlbum(): void {
    this.creatingNewAlbum = true;
  }

  cancelCreateNewAlbum(): void {
    this.creatingNewAlbum = false;
    this.newAlbumTitle = ''; // Clear the input
  }

  createNewAlbum(): void {
    if (this.newAlbumTitle.trim() !== '') {
      const newId = Math.max(...this.albums.map(a => a.id)) + 1; // простой вариант

      const newAlbum: Album = {
        id: newId,
        title: this.newAlbumTitle,
        isTemporary: true, // Указываем, что альбом временный
      };

      this.albums = [...this.albums, newAlbum];
      this.cancelCreateNewAlbum();
    }
  }
}