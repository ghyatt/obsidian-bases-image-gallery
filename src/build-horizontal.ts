const buildHorizontal = (
    container: HTMLElement,
    imagesList: {[key: string]: any},
    settings: {[key: string]: any}
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
  imagesList.forEach((file: {[key: string]: string}) => {
    const figure = gallery.createEl('figure')
    figure.addClass('grid-item')
    figure.setAttribute('data-name', file.name)
    figure.setAttribute('data-folder', file.folder)
    figure.setAttribute('data-src', file.uri)

    const img = figure.createEl('img')
    img.src = file.uri
  })

  return gallery
}

export default buildHorizontal
