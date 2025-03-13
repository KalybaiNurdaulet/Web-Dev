import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
  { path: 'albums', loadComponent: () => import('./albums/albums.component').then(m => m.AlbumsComponent) },
  { path: 'albums/:id', loadComponent: () => import('./albums-detail/albums-detail.component').then(m => m.AlbumDetailComponent) },
  { path: 'albums/:id/photos', loadComponent: () => import('./albums-photos/albums-photos.component').then(m => m.AlbumPhotosComponent) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }