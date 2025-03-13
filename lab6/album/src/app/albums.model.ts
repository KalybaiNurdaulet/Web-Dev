// albums.model.ts
// albums.model.ts
// albums.model.ts
export interface Album {
    id: number;
    title: string;
    isTemporary?: boolean;
    isHidden?: boolean; // Добавляем поле isHidden
  }
  
  export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }