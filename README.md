# DV Frame

**Diversity Visa photo preparation in Arabic and English.**

DV Frame provides guided camera capture, photo composition tools, and JPEG export directly in the browser. Photos are processed on the device.

[العربية](README.ar.md)

## Features

- **Guided capture** — live camera preview with head, eye, and chin guides, plus device-camera and image-upload options.
- **Composition controls** — crop positioning, zoom, and manual hairline, eye, and chin markers.
- **Photo checks** — estimated head size, eye level, pose, lighting, background uniformity, and source resolution.
- **Local face detection** — MediaPipe face landmarks processed in a background worker.
- **Bilingual interface** — Arabic and English with right-to-left and left-to-right layouts.
- **JPEG export** — 600 × 600 pixels, up to 240,000 bytes, without guide overlays.

## Using the app

1. Capture a photo or select an existing image.
2. Adjust the crop and confirm the hair, eye, and chin markers.
3. Review the checks and confirm the photo conditions.
4. Download the JPEG.

The app crops and resizes the image; it does not retouch facial features or replace the background. Camera capture requires permission and a secure browser context.

## Privacy

Photo processing takes place in the browser. The application does not upload or persist photos, require an account, or include analytics. Only the language preference is saved locally. The hosting service receives ordinary requests for application and model files.

## Scope and limitations

DV Frame is an independent preparation tool and is not affiliated with the U.S. government. Automated checks are estimates, not official validation. Background checks sample image edges, and the top of the hair requires manual confirmation. Photo age, retouching, glasses, expression, and the full background require visual review.

Exporting a file does not establish that it meets every submission requirement. The instructions for the applicable DV program govern photo acceptance.

- [Official photo requirements](https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html)
- [Photo composition guidance](https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos/photo-composition-template.html)
- [Diversity Visa instructions](https://travel.state.gov/content/travel/en/us-visas/immigrate/diversity-visa-program-entry/diversity-visa-instructions.html)

## Technology

Vanilla JavaScript, HTML, CSS, Canvas, Web Workers, and MediaPipe Tasks Vision. Node.js scripts provide asset verification, bundling, and automated checks. Runtime and model versions are pinned in `assets.lock.json`.

Third-party component information is available in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
