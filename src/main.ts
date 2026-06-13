import { Plugin } from 'obsidian'
import { GalleryBasesView, VIEW_TYPE } from './bases-view'

export default class BasesImageGallery extends Plugin {
  async onload() {
    this.registerBasesView(VIEW_TYPE, {
      name: 'Image gallery',
      icon: 'lucide-images',
      factory: (controller, containerEl) => new GalleryBasesView(controller, containerEl),
      options: (config) => {
        // 'vertical' is the default (horizontal masonry is broken upstream in
        // the original plugin), so anything but an explicit 'horizontal' counts
        // as vertical. NB: the key must NOT be 'type' — that is the view
        // entry's reserved renderer-ID field in the .base file, and Bases
        // refuses to persist option values under it.
        const isVertical = () => config.get('layout') !== 'horizontal'
        return [
          {
            type: 'dropdown',
            displayName: 'Layout',
            key: 'layout',
            default: 'vertical',
            options: {
              vertical: 'Vertical masonry',
              horizontal: 'Horizontal masonry',
            },
          },
          {
            type: 'slider',
            displayName: 'Row height (px)',
            key: 'height',
            default: 260,
            min: 50,
            max: 1000,
            shouldHide: () => isVertical(),
          },
          {
            type: 'slider',
            displayName: 'Columns (desktop)',
            key: 'columns',
            default: 3,
            min: 1,
            max: 10,
            shouldHide: () => !isVertical(),
          },
          {
            type: 'slider',
            displayName: 'Columns (mobile)',
            key: 'mobile',
            default: 2,
            min: 1,
            max: 6,
            shouldHide: () => !isVertical(),
          },
          {
            type: 'slider',
            displayName: 'Gutter (px)',
            key: 'gutter',
            default: 8,
            min: 0,
            max: 64,
          },
          {
            type: 'slider',
            displayName: 'Corner radius (px)',
            key: 'radius',
            default: 0,
            min: 0,
            max: 64,
          },
        ]
      },
    })
  }

  onunload() {}
}
