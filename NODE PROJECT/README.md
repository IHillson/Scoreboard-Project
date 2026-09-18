# From The Other Side — frontend

Static frontend for the paranormal sightings site: `index.html` (Home),
`read.html` (Read), `upload.html` (Upload). No build step — serve the
folder as-is.

```
from-the-other-side/
├── index.html
├── read.html
├── upload.html
├── css/
│   └── styles.css
├── js/
│   ├── api.js      # the only file that knows the API routes/shapes
│   ├── nav.js       # highlights the active nav link on every page
│   ├── read.js       # GET request + rendering, used on read.html
│   └── upload.js     # POST request + form handling, used on upload.html
└── images/            # empty — drop any real photos/illustrations here
```

## API contract expected from the server

**`GET /api/sightings`**
→ `200`, JSON array, most recent first:

```json
[
  {
    "id": "abc123",
    "title": "The Phantom Warning",
    "location": "Exeter, UK",
    "date": "2025-01-07T09:30:00.000Z",
    "details": "I was drifting through town, lost in thought..."
  }
]
```

**`POST /api/sightings`**
Request body (JSON):

```json
{
  "title": "The Phantom Warning",
  "date": "2025-01-07T09:30:00.000Z",
  "location": "Exeter, UK",
  "details": "I was drifting through town, lost in thought..."
}
```

→ `201` with the created sighting (same shape as above) on success.
→ `400` with `{ "error": "message" }` on validation failure — the
  message is shown to the user as-is, so keep it plain-language.

`date` is sent as an ISO 8601 string, built client-side from the
`datetime-local` input via `new Date(value).toISOString()`.

## Notes

- Everything is vanilla HTML/CSS/JS with ES modules — no framework,
  no bundler.
- `js/api.js` is the single seam between frontend and backend. If you
  change a route or a field name on the server, that's the only file
  that needs updating on this side.
- The hero illustration on the home page and the whole visual style
  are built with inline SVG/CSS rather than image files, so the site
  works before any real photos exist. Drop images into `images/` and
  reference them from the HTML/CSS whenever you're ready.
- Fonts (Butcherman, Special Elite) load from Google Fonts via the
  `@import` at the top of `css/styles.css` — swap for self-hosted
  files if you want the page to work fully offline.
