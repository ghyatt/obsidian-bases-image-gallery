import { App, Platform } from 'obsidian'
import Lightbox from 'lightgallery'
import LightboxThumbs from 'lightgallery/plugins/thumbnail'
import type { GalleryImage } from './types'

// Minimal typing for the lightGallery instance surface we use; its published
// types don't cleanly expose the lgQuery helpers we rely on.
interface LgQuery {
  append: (child: string | HTMLElement) => void
  find: (selector: string) => LgQuery
  get: () => HTMLElement
  on: (events: string, listener: (e: Event) => void) => void
}
interface LgInstance {
  index: number
  outer: LgQuery
  closeGallery: () => void
}

const lgInstance = (event: Event): LgInstance =>
  (event as CustomEvent<{ instance: LgInstance }>).detail.instance

const lightbox = (gallery: HTMLElement, imagesList: GalleryImage[], app: App) => {
  // attach a custom button to open the original image, only on desktop
  if (Platform.isDesktop) globalSearchBtn(gallery, imagesList, app)

  // double-click the open image to close, mirroring the Escape key. Especially
  // useful on mobile, where the default close (X) button is hidden via CSS.
  closeOnDoubleClick(gallery)

  // transparent info overlay (top-right, below the toolbar) showing the
  // current image's filename, dimensions, size, and creation date
  infoPanel(gallery, imagesList)

  // setup a lightbox for the gallery. Redundant mobile controls (close/prev/
  // next) are hidden via the `.is-mobile` rules in styles.css.
  return Lightbox(gallery, {
    plugins: [LightboxThumbs],
    // only real image items are slides — excludes the horizontal layout's
    // trailing spacer so indices stay aligned with imagesList
    selector: '.grid-item',
    counter: false,
    download: false,
    thumbnail: true,
    loop: false,
    mode: 'lg-fade',
    licenseKey: '622E672F-760D49DC-980EF90F-B7A9DCB0',
  })
}

// human-readable file size, e.g. 1536000 -> "1.5 MB"
const formatSize = (bytes: number): string => {
  if (!Number.isFinite(bytes)) return ''
  const units = ['B', 'KB', 'MB', 'GB']
  let n = bytes
  let i = 0
  while (n >= 1024 && i < units.length - 1) { n /= 1024; i++ }
  return `${i === 0 ? n : n.toFixed(1)} ${units[i]}`
}

const formatDate = (ms: number): string =>
  Number.isFinite(ms) ? new Date(ms).toLocaleDateString() : ''

const infoPanel = (gallery: HTMLElement, imagesList: GalleryImage[]) => {
  gallery.addEventListener('lgInit', (event: Event) => {
    const galleryInstance = lgInstance(event)

    // styled in styles.css: absolute top-right, below the toolbar; pointer-events
    // none so it never intercepts the dblclick-to-close or nav. Lives inside
    // .lg-outer, so it is torn down with the lightbox automatically.
    const panel = gallery.ownerDocument.createElement('div')
    panel.className = 'bases-image-gallery-info'
    galleryInstance.outer.append(panel)

    // dimensions aren't known until the full-size image decodes; read them off
    // the current slide's <img> when available, else leave blank for this pass
    const currentDimensions = (): string => {
      const img = galleryInstance.outer.find('.lg-current .lg-image').get() as HTMLImageElement
      return img && img.naturalWidth ? `${img.naturalWidth} × ${img.naturalHeight}` : ''
    }

    const update = () => {
      const file = imagesList[galleryInstance.index]
      if (!file) return
      panel.empty()
      const rows = [file.name, currentDimensions(), formatSize(file.size), formatDate(file.ctime)]
      rows.filter(Boolean).forEach((text, idx) => {
        const row = gallery.ownerDocument.createElement('div')
        row.className = idx === 0 ? 'bases-image-gallery-info-name' : 'bases-image-gallery-info-row'
        row.textContent = text // textContent (not innerHTML) — filenames are untrusted
        panel.appendChild(row)
      })
    }

    // open + each slide give us name/size/date immediately; lgImageLoadAfter
    // re-runs once the image has decoded so dimensions fill in
    gallery.addEventListener('lgAfterOpen', update)
    gallery.addEventListener('lgAfterSlide', update)
    gallery.addEventListener('lgImageLoadAfter', update)
  })
}

const closeOnDoubleClick = (gallery: HTMLElement) => {
  // lightGallery hands us the instance + its DOM via the lgInit event; the
  // listener must be registered before Lightbox() runs (same as the toolbar
  // button below), since lgInit fires during construction.
  gallery.addEventListener('lgInit', (event: Event) => {
    const galleryInstance = lgInstance(event)
    galleryInstance.outer.on('dblclick', (e: Event) => {
      // ignore double-clicks on the controls so closing only triggers on the
      // image or backdrop, not the nav arrows, toolbar, or thumbnail strip
      const target = e.target as HTMLElement
      if (target.closest('.lg-toolbar, .lg-prev, .lg-next, .lg-thumb-outer')) return
      galleryInstance.closeGallery()
    })
  })
}

const globalSearchBtn = (gallery: HTMLElement, imagesList: GalleryImage[], app: App) => {
  gallery.addEventListener('lgInit', (event: Event) => {
    const galleryInstance = lgInstance(event)
    const btn = '<button type="button" id="btn-glob-search" class="lg-icon btn-glob-search"></button>'
    galleryInstance.outer.find('.lg-toolbar').append(btn)

    galleryInstance.outer.find('#btn-glob-search').on('click', () => {
      const selected = imagesList[galleryInstance.index]
      if (!selected) return
      void app.workspace.openLinkText('', `${selected.folder}/${selected.name}`, true, { active: true })
      galleryInstance.closeGallery()
    })
  })
}

export default lightbox
