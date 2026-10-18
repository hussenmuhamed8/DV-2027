# Third-party components

DV Frame uses the following upstream assets, downloaded by `npm run setup`. The app's own source is separate from these components.

- **MediaPipe Tasks Vision**: `@mediapipe/tasks-vision@0.10.22-rc.20250304`, JavaScript bundle and SIMD/non-SIMD WebAssembly runtimes. Upstream: https://github.com/google-ai-edge/mediapipe. MediaPipe is distributed under Apache License 2.0, with bundled notices where supplied.
- **Face Landmarker task bundle**, float16, version 1: https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task. Model documentation and applicable model information: https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker#models.

Exact download URLs and SHA-256 hashes are recorded in `assets.lock.json`. Preserve upstream notices and check the upstream model terms before redistributing modified models. See `licenses/mediapipe-Apache-2.0.txt` for the upstream source-code license.
