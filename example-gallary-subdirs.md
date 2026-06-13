
# Example of Obsidian Bases Image Gallery ebbed in a note

```base
filters:
  and:
    - '["jpg", "jpeg", "png", "gif", "webp", "tiff", "tif"].contains(file.ext.lower())'
    - |
      file.folder.contains(this.file.folder)
views:
  - type: image-gallery
    name: Gallery
    layout: vertical
    columns: 3
    mobile: 2

```
