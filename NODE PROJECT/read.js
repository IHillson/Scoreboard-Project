// read.js
// Loads sightings from the server and renders them as cards.
// "Read in full" expands the excerpt in place rather than navigating away,
// since there's no separate detail page in the design.

import { getSightings } from "./api.js";

const listEl = document.getElementById("sightings-list");

function formatMeta(dateISO, location) {
  const date = new Date(dateISO);
  const dateLabel = Number.isNaN(date.getTime())
    ? dateISO
    : date.toLocaleString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
  return `${dateLabel}, ${location}`;
}

function buildCard({ title, date, location, details }) {
  const li = document.createElement("li");
  li.className = "sighting-card";

  const meta = document.createElement("p");
  meta.className = "sighting-card__meta";
  meta.textContent = formatMeta(date, location);

  const heading = document.createElement("h3");
  heading.className = "sighting-card__title";
  heading.textContent = title;

  const excerpt = document.createElement("p");
  excerpt.className = "sighting-card__excerpt";
  excerpt.textContent = details;
  excerpt.hidden = true;

  const preview = document.createElement("p");
  preview.className = "sighting-card__excerpt";
  preview.textContent = details.length > 140 ? `${details.slice(0, 140).trim()}…` : details;

  const toggle = document.createElement("button");
  toggle.className = "sighting-card__toggle";
  toggle.type = "button";
  toggle.textContent = "Read in full";
  toggle.addEventListener("click", () => {
    const expanding = excerpt.hidden;
    excerpt.hidden = !expanding;
    preview.hidden = expanding;
    toggle.textContent = expanding ? "Show less" : "Read in full";
  });

  li.append(meta, heading, preview, excerpt, toggle);
  return li;
}

function renderState(message, tone = "default") {
  const li = document.createElement("li");
  li.className = tone === "error" ? "state-message state-message--error" : "state-message";
  li.textContent = message;
  listEl.replaceChildren(li);
}

async function renderSightings() {
  try {
    const sightings = await getSightings();

    if (!sightings.length) {
      renderState("No sightings reported yet. Be the first to share what you saw.");
      return;
    }

    listEl.replaceChildren(...sightings.map(buildCard));
  } catch (err) {
    renderState("Something went wrong loading sightings. Try refreshing the page.", "error");
  }
}

renderSightings();
