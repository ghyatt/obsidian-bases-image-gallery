import { BasesView, Platform, QueryController, TFile } from 'obsidian'
import buildHorizontal from './build-horizontal'
import buildVertical from './build-vertical'
import buildLightbox from './build-lightbox'
import renderError from './render-error'
import type { GalleryImage, GallerySettings } from './types'

export const VIEW_TYPE = 'image-gallery'

const VALID_EXTENSIONS = ['jpeg', 'jpg', 'gif', 'png', 'webp', 'tiff', 'tif']

// An unfiltered Base exposes every file in the vault; cap rendering rather
// than freezing the app. Full virtualization is out of scope for v1.
const MAX_ENTRIES = 500

export class GalleryBasesView extends BasesView {
  readonly type = VIEW_TYPE

  private viewContainerEl: HTMLElement
  private gallery: HTMLElement | null = null
  private lightbox: ReturnType<typeof buildLightbox> | null = null

  constructor(controller: QueryController, parentEl: HTMLElement) {
    super(controller)
    this.viewContainerEl = parentEl.createDiv('bases-image-gallery-view')
    // the width:100% guard (against flex/shrink-to-fit parents collapsing the
    // column layout) lives in styles.css
  }

  onDataUpdated(): void {
    this.destroyGallery()
    this.viewContainerEl.empty()

    const settings = this.readSettings()
    const images = this.getImagesList()

    if (images.length === 0) {
      renderError(
        this.viewContainerEl,
        'No images match this view. Filter the Base to image files (jpeg, jpg, gif, png, webp, tiff, tif).'
      )
      return
    }

    const visible = images.slice(0, MAX_ENTRIES)

    if (settings.type === 'vertical') {
      this.gallery = buildVertical(this.viewContainerEl, visible, settings)
    } else {
      this.gallery = buildHorizontal(this.viewContainerEl, visible, settings)
    }

    if (images.length > visible.length) {
      this.viewContainerEl.createEl('p', {
        text: `Showing ${visible.length} of ${images.length} images — narrow the Base filters to see the rest.`,
        cls: 'bases-image-gallery-notice',
      })
    }

    this.lightbox = buildLightbox(this.gallery, visible, this.app)
  }

  onunload(): void {
    this.destroyGallery()
    this.viewContainerEl.empty()
  }

  private destroyGallery(): void {
    if (this.lightbox) {
      this.lightbox.destroy()
      this.lightbox = null
    }
    if (this.gallery) {
      this.gallery.remove()
      this.gallery = null
    }
  }

  // Same keys and defaults as the original code-block settings, read from the
  // Bases view config instead of YAML. `path`, `sortby`, and `sort` are gone:
  // the Base's filters select the files and its sort order is preserved.
  private readSettings(): GallerySettings {
    const num = (key: string, fallback: number): number => {
      const value = Number(this.config.get(key))
      return Number.isFinite(value) ? value : fallback
    }

    // Option key is 'layout' ('type' is reserved for the view's renderer ID
    // in the .base file); the settings object still uses 'type' internally
    // because the untouched render modules expect it. Vertical is the
    // default — horizontal masonry is broken upstream in the original.
    const type = this.config.get('layout') === 'horizontal' ? 'horizontal' : 'vertical'
    const desktopColumns = num('columns', 3)
    const mobileColumns = num('mobile', 2)

    return {
      type: type,
      height: num('height', 260),
      columns: Platform.isDesktop ? desktopColumns : mobileColumns,
      mobile: mobileColumns,
      gutter: num('gutter', 8),
      radius: num('radius', 0),
    }
  }

  // Each Bases entry is itself an image file; the Base does the selecting.
  // Non-image entries are skipped silently as a safety net. Entry order is
  // the Base's own (presorted) order.
  private getImagesList(): GalleryImage[] {
    const images: GalleryImage[] = []

    for (const entry of this.data.data) {
      const file = entry.file
      if (!(file instanceof TFile)) continue
      if (!VALID_EXTENSIONS.includes(file.extension.toLowerCase())) continue

      images.push({
        name: file.name,
        folder: file.parent ? file.parent.path : '',
        uri: this.app.vault.adapter.getResourcePath(file.path),
        // file.stat is free (no vault read); the lightbox info panel formats
        // size + creation date from these. Dimensions come from the rendered img.
        size: file.stat.size,
        ctime: file.stat.ctime,
      })
    }

    return images
  }
}
