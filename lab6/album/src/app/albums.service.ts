// albums.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album, Photo } from './albums.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private baseUrl = 'https://jsonplaceholder.typicode.com'; 
  
  constructor(private http: HttpClient) { }
  

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${albumId}/photos`);
  }

  createAlbum(album: Album): Observable<Album> {
      return this.http.post<Album>(`${this.baseUrl}/albums`, album);
  }

  updateAlbum(id: number, album: Album): Observable<Album> {
      return this.http.put<Album>(`${this.baseUrl}/albums/${id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/albums/${id}`);
  }
}