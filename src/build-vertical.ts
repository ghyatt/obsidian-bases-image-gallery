const buildVertical = (
    container: HTMLElement,
    imagesList: {[key: string]: any},
    settings: {[key: string]: any}
  ) => {
    // inject the gallery wrapper
    const gallery = container.createEl('div')
    gallery.addClass('grid-wrapper')
    gallery.style.lineHeight = '0px'
    gallery.style.columnCount = `${settings.columns}`
    gallery.style.columnGap = `${settings.gutter}px`

    // inject and style images
    imagesList.forEach((file: {[key: string]: string}) => {
      const figure = gallery.createEl('div')
      figure.addClass('grid-item')
      figure.style.marginBottom = `${settings.gutter}px`
      figure.style.width = '100%'
      figure.style.height = 'auto'
      figure.style.cursor = 'pointer'
      figure.setAttribute('data-name', file.name)
      figure.setAttribute('data-folder', file.folder)
      figure.setAttribute('data-src', file.uri)

      const img = figure.createEl('img')
      // Markdown preview applied max-width:100% for the original plugin;
      // a Bases pane has no markdown CSS, so size the image explicitly.
      img.style.width = '100%'
      img.style.height = 'auto'
      img.style.display = 'block'
      img.style.borderRadius = `${settings.radius}px`
      img.src = file.uri
    })

    return gallery
}

export default buildVertical
