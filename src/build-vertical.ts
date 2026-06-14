import type { GalleryImage, GallerySettings } from './types'

const buildVertical = (
    container: HTMLElement,
    imagesList: GalleryImage[],
    settings: GallerySettings
  ) => {
    // Static styling lives in styles.css (.bases-image-gallery-vertical); only
    // the user-configurable values are passed through as CSS custom properties.
    const gallery = container.createEl('div')
    gallery.addClass('grid-wrapper')
    gallery.addClass('bases-image-gallery-vertical')
    gallery.style.setProperty('--big-columns', `${settings.columns}`)
    gallery.style.setProperty('--big-gutter', `${settings.gutter}px`)
    gallery.style.setProperty('--big-radius', `${settings.radius}px`)

    // inject images
    imagesList.forEach((file) => {
      const figure = gallery.createEl('div')
      figure.addClass('grid-item')
      figure.setAttribute('data-name', file.name)
      figure.setAttribute('data-folder', file.folder)
      figure.setAttribute('data-src', file.uri)

      const img = figure.createEl('img')
      img.src = file.uri
    })

    return gallery
}

export default buildVertical
