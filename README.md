# Nattapong Seebudda — Portfolio

Responsive English-language portfolio for a third-year Computer Engineering / IoT student preparing for a Software Engineering Internship.

## Run

Requires Node.js, with no package installation:

```sh
npm run build
npm run dev
```

Open http://127.0.0.1:4173. Rebuild and refresh after source changes. You can also open `dist/index.html` directly.

## Edit

- `src/data.mjs`: profile, skill evidence, projects, and verified contact fields.
- `src/components.mjs`: semantic HTML section components.
- `src/styles.css`: design tokens, layout, and responsive styles.
- `public/hero.webp`: original AI-generated artwork, not an actual place or project screenshot.
- `build.mjs`: static rendering and validation of anchors, IDs, and heading structure.
- `server.cjs`: preview server bound to 127.0.0.1.
- `PORTFOLIO-REPORT.md`: positioning, copy, design decisions, sources, and QA.

## Content status

All personal facts come from the user's brief. Contact fields remain null until verified. Skills are grouped by evidence of use; no proficiency scores are invented. Expense Tracker OCR/uploads/category suggestions and the AI automation pipeline are explicitly unconfirmed. No employment, awards, certificates, follower counts, or performance metrics are claimed.

## Publish

Run the build and upload `dist/` to a static host. No database or API key is needed. The core portfolio works without JavaScript; a small browser script enables filters, search, bilingual copy, photo preview, and saved preferences. A Sites project was registered but deployment is incomplete; its identity remains in `.openai/hosting.json`. Do not register a duplicate.

## Interactive features

- Filter projects by category and search their text and technology. Reset clears both filters.
- Switch English/Thai with the language button. Technology and proper names may remain in English. Preference survives reload.
- Choose a profile picture in About. Accepts decodable JPG/PNG/WebP up to 3 MB. The picture is stored only in this browser using localStorage and can be removed. It is never uploaded or made visible to other visitors. To publish a real portrait, add the provided image to the website assets and wire it into the portrait component.
- Pause motion is saved per browser; reduced-motion system preferences remain respected.

## Browser checks

Run `npm run test:e2e` with the preview server running. The suite uses Playwright in a fresh, isolated, headless Chrome context; it does not use your logged-in Chrome profile. Install Playwright locally or set `PLAYWRIGHT_MODULE` to an existing module path. On this machine the bundled runtime is used automatically. Requires installed Chrome.

Checks cover filtering/search/reset, keyboard disclosures, photo decoding/validation/persistence/removal, language persistence, motion preferences, responsive overflow in both languages, and local resource/page errors. Results and desktop/mobile screenshots are saved in `tests/artifacts/`.

Google Fonts load externally with system fallbacks. Open Graph title/description are included; add a canonical URL after the production URL is confirmed. There is no analytics, contact data collection, or unrequested social sharing image.
