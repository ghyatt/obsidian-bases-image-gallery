# Bases Image Gallery — Beta Tester Guide

Thanks for helping test **Bases Image Gallery**, an Obsidian plugin that turns a [Base](https://obsidian.md/help/bases) into a masonry photo gallery with a click-to-zoom lightbox. This is an early beta (`0.1.0`) installed through **BRAT**, so expect a few rough edges — your feedback is exactly what I'm after.

---

## What you need first

- **Obsidian 1.10.2 or newer**, with the core **Bases** plugin available (Settings → Core plugins).
- A few images already in your vault (`.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.tiff`, `.tif`).

## 1. Install BRAT (one time)

BRAT is the community tool for installing beta plugins straight from GitHub.

1. Settings → **Community plugins** → **Browse**.
2. Search **"BRAT"** (full name: *Obsidian42 - BRAT*), **Install**, then **Enable**.

## 2. Add Bases Image Gallery via BRAT

1. Settings → **BRAT** → **Add beta plugin**.
2. Paste this repository:
   ```
   ghyatt/obsidian-bases-image-gallery
   ```
3. Click **Add Plugin**. BRAT downloads the latest release and enables it automatically.
4. Confirm **Bases Image Gallery** shows as enabled under Settings → Community plugins.

> BRAT will auto-update you to new beta releases as I push them — no need to reinstall.

## 3. Use it

1. Create a **Base** (or embed one in a note with a ```` ```base ```` block).
2. Add a filter so the Base selects your images. A simple "all images in the vault" filter:
   ```
   ["jpg", "jpeg", "png", "gif", "webp", "tiff", "tif"].contains(file.ext.lower())
   ```
3. In the Base's view dropdown, choose the **Image gallery** view.
4. The gallery renders as soon as the filter matches images. Click any image to open the lightbox; **press `Esc` or double-click** to close it.

Prefer to copy a ready-made example? See [`example-gallery-all-img.base`](example-gallery-all-img.base) and [`example-gallery-subdirs.base`](example-gallery-subdirs.base) (each also has an embedded-in-a-note version: [`.md`](example-gallery-all-img.md) / [`.md`](example-gallery-subdirs.md)).

## 4. Settings to try

Open the Base's **view configuration** menu — all options live there and save into the `.base` file automatically:

| Option | Default | Notes |
|---|---|---|
| **Layout** | Vertical | Vertical works well; *Horizontal is known-broken in this beta* (see below). |
| **Columns (desktop / mobile)** | 3 / 2 | Vertical layout only. |
| **Row height** | 260px | Horizontal layout only. |
| **Gutter** | 8px | Spacing between images. |
| **Corner radius** | 0px | Rounds image corners. |

---

## Please focus testing on

- **Vertical layout** rendering across different column counts and image mixes.
- **Lightbox**: opening, paging between images, the top-right info overlay (filename / dimensions / size / date), and closing via **Esc** and **double-click**.
- **Live updates**: add or remove an image in a filtered folder and watch the gallery update.
- **Mobile** (if you have it): does **double-tap** close the lightbox? *(This is the big unknown I need confirmed.)*

## Known issues in 0.1.0

- **Horizontal masonry is broken** — stick to Vertical for now; it's the default.
- **Mobile**: the lightbox's close (X) button is hidden, so closing relies on double-tap — unverified, please report.
- Photo date shown is the **file creation date**, not the camera/EXIF "date taken".

## Reporting feedback

Please file anything — bugs, confusion, wishes — as a GitHub issue:
**https://github.com/ghyatt/obsidian-bases-image-gallery/issues**

Helpful to include: your Obsidian version, desktop or mobile, the layout you used, and a screenshot if it's visual.

Thanks again! 🙏
