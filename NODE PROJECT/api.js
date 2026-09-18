// api.js
// Everything this frontend knows about the server contract lives here.
// If the server routes ever change, this is the only file that should need editing.
//
// Expected contract (build this on the server side):
//
//   GET /api/sightings
//     -> 200, JSON array of sighting objects, most recent first:
//        [{ id, title, location, date, details }, ...]
//        `date` is an ISO 8601 string (e.g. new Date().toISOString()).
//
//   POST /api/sightings
//     body: JSON { title, date, location, details }
//     -> 201, JSON of the created sighting (same shape as above)
//     -> 400, JSON { error: "message" } for validation failures

const BASE_URL = "/api/sightings";

/**
 * Fetch all sightings for the Read page.
 * @returns {Promise<Array<{id:string, title:string, location:string, date:string, details:string}>>}
 */
export async function getSightings() {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Could not load sightings (status ${response.status})`);
  }

  return response.json();
}

/**
 * Submit a new sighting from the Upload page.
 * @param {{title: string, date: string, location: string, details: string}} payload
 * @returns {Promise<object>} the created sighting, as returned by the server
 */
export async function createSighting(payload) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    // Try to surface a server-provided message; fall back to a generic one.
    let message = `Could not submit sighting (status ${response.status})`;
    try {
      const body = await response.json();
      if (body?.error) message = body.error;
    } catch {
      // response wasn't JSON — keep the generic message
    }
    throw new Error(message);
  }

  return response.json();
}
