import type { GalleryImage, GallerySettings } from './types'

const buildHorizontal = (
    container: HTMLElement,
    imagesList: GalleryImage[],
    settings: GallerySettings
  ) => {
  // Static styling lives in styles.css (.bases-image-gallery-horizontal); only
  // the user-configurable values are passed through as CSS custom properties.
  const gallery = container.createEl('div')
  gallery.addClass('grid-wrapper')
  gallery.addClass('bases-image-gallery-horizontal')
  gallery.style.setProperty('--big-gutter', `${settings.gutter}px`)
  gallery.style.setProperty('--big-radius', `${settings.radius}px`)
  gallery.style.setProperty('--big-row-height', `${settings.height}px`)

  // inject images
  imagesList.forEach((file) => {
    const figure = gallery.createEl('figure')
    figure.addClass('grid-item')
    figure.setAttribute('data-name', file.name)
    figure.setAttribute('data-folder', file.folder)
    figure.setAttribute('data-src', file.uri)

    const img = figure.createEl('img')
    // The aspect ratio isn't known until the image decodes; once it loads, pass
    // it to the CSS as a custom property so the row justifies with true
    // proportions (flex-grow + flex-basis scale off --aspect in styles.css).
    img.addEventListener('load', () => {
      if (img.naturalHeight > 0) {
        figure.style.setProperty('--aspect', `${img.naturalWidth / img.naturalHeight}`)
      }
    })
    img.src = file.uri
  })

  // Trailing spacer: absorbs the leftover space in the last (partial) row so its
  // images keep their natural size instead of stretching to fill the width.
  // It is not a `.grid-item`, so the lightbox selector ignores it.
  gallery.createEl('div', { cls: 'bases-image-gallery-hspacer' })

  return gallery
}

export default buildHorizontal
