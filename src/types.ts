// Shared types for the gallery view, builders, and lightbox.

export interface GalleryImage {
  name: string
  folder: string
  uri: string
  size: number
  ctime: number
}

export interface GallerySettings {
  type: 'vertical' | 'horizontal'
  height: number
  columns: number
  mobile: number
  gutter: number
  radius: number
}
