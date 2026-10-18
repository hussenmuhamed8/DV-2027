# DV Frame · DV-2027

A browser-local photo studio for Diversity Visa photo preparation, with complete **Arabic / English** interfaces, RTL / LTR layouts, camera guides, optional face landmarks, and 600 × 600 JPEG export.

[الدليل بالعربي](README.ar.md)

## Features

- Live camera with eye, hair-top, and chin guides; native device-camera and file-upload fallbacks.
- On-device MediaPipe Face Landmarker running in a worker so loading and inference do not block the controls.
- Manual markers, zoom, and crop positioning. The top of the hair must be confirmed manually.
- Estimated face pose, eye level, head size, edge-background uniformity, lighting, and source-resolution checks.
- JPEG output at 600 × 600 pixels, at most 240,000 bytes; guides are never exported.
- English / Arabic switching without losing the current photo or crop; language preference saved locally.
- No accounts, API keys, backend, photo uploads, or analytics in the application.

## Run locally

Install Node.js 22 or later, then from the project folder:

```sh
npm run setup
npm run dev
```

Open `http://localhost:4173`. There are no npm package dependencies and no `npm install` step. `setup` downloads the pinned model/runtime assets and verifies their SHA-256 hashes. If the release ZIP already contains `public/`, setup verifies those files without downloading them again.

Use HTTPS when opening from a phone or another computer. Camera access generally works on localhost or HTTPS, not an arbitrary HTTP LAN address. Opening `index.html` as a `file://` URL is unsupported.

## Build and test

```sh
npm run check
```

This builds `dist/` and runs Node tests for geometry, image sampling, startup, control binding, simulated camera capture/export, and language switching. Tests use a simulated DOM/camera and do **not** replace real-device browser testing. The build parses the exact bundled script and stops on syntax errors.

## Deploy

Any static HTTPS host can serve `dist/`. Keep the model and `wasm/` files alongside `index.html`; `.mjs` files need a JavaScript MIME type and `.wasm` files need `application/wasm`.

For GitHub Pages:

1. Push this project to `hussenmuhamed8/DV-2027`.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Under **Actions → Deploy GitHub Pages**, run the workflow manually.

Deployment is manual so merely pushing source does not publish the site. The Pages workflow builds and tests before deploying. All asset URLs are relative, including the worker, so a repository subpath is supported. GitHub plan/repository visibility restrictions may affect Pages availability.

## Project layout

| Path | Purpose |
| --- | --- |
| `src/index.html`, `src/style.css` | Layout and responsive styles |
| `src/app.js` | Capture, crop, checks, and export |
| `src/core.mjs` | Pure geometry and pixel-analysis functions |
| `src/i18n.js`, `src/translations.json` | Translation and language state |
| `src/face-worker.js` | Local face-landmark inference |
| `scripts/` | Verified asset setup, build, local server |
| `assets.lock.json` | Asset versions, URLs, and hashes |
| `tests/` | Node regression tests |
| `dist/` | Generated deployment output; do not edit directly |
| `public/` | Downloaded model assets; ignored by Git |
| `.github/workflows/` | CI and optional Pages deployment |

## Privacy and limitations

Photo pixels are processed locally in your browser and are not sent to a server by this application. Hosting providers still receive normal requests for application/model assets. A localStorage key stores only the selected language. Photo data is not persisted by the app.

This is an independent assistant, not a US government service or an official compliance validator. Background checks sample edge strips; they cannot certify the entire background. Lighting checks are approximate and can misjudge skin tones or difficult scenes. Face landmarks do not detect the exact top of hair, photo age, retouching, all glasses, or every expression/pose issue. Review all of these yourself. A downloadable file may still have warnings and may not be acceptable for submission. A correctly formatted photo does not guarantee visa eligibility, selection, or acceptance.

Photo guidelines may change. Review the instructions for the actual DV cycle before using the output:

- https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html
- https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos/photo-composition-template.html
- https://travel.state.gov/content/travel/en/us-visas/immigrate/diversity-visa-program-entry/diversity-visa-instructions.html

## Third-party components

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for the pinned MediaPipe runtime/model sources. No application license is selected yet; the repository owner can choose one before open-source publication.
