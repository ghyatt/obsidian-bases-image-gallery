const renderError = (container: HTMLElement, error: string) => {
  // styled via .bases-image-gallery-error in styles.css
  const wrapper = container.createEl('div', { cls: 'bases-image-gallery-error' })
  wrapper.createEl('p', { text: `(Error) Image Gallery: ${error}` })
}

export default renderError
