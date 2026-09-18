// upload.js
// Handles the Add Sighting form: light client-side validation, then a POST
// to the server. Submit is disabled while the request is in flight so a
// double-click can't create two sightings.

import { createSighting } from "./api.js";

const form = document.getElementById("sighting-form");
const submitButton = document.getElementById("submit-button");
const statusEl = document.getElementById("form-status");

const fields = {
  title: document.getElementById("title"),
  date: document.getElementById("date"),
  location: document.getElementById("location"),
  details: document.getElementById("details"),
};

function setFieldError(name, message) {
  const field = fields[name];
  const wrapper = field.closest(".field");
  const errorEl = wrapper.querySelector(".field__error");
  wrapper.classList.toggle("field--error", Boolean(message));
  errorEl.textContent = message ?? "";
}

function clearErrors() {
  for (const name of Object.keys(fields)) setFieldError(name, "");
}

function validate() {
  clearErrors();
  let valid = true;

  if (!fields.title.value.trim()) {
    setFieldError("title", "Give the sighting a title.");
    valid = false;
  }
  if (!fields.date.value) {
    setFieldError("date", "Add the date it happened.");
    valid = false;
  }
  if (!fields.location.value.trim()) {
    setFieldError("location", "Add a location.");
    valid = false;
  }
  if (!fields.details.value.trim()) {
    setFieldError("details", "Tell us what happened.");
    valid = false;
  }

  return valid;
}

function setStatus(message, tone) {
  statusEl.textContent = message;
  if (tone) statusEl.dataset.tone = tone;
  else delete statusEl.dataset.tone;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  setStatus("");

  if (!validate()) {
    setStatus("Fix the highlighted fields and try again.", "error");
    return;
  }

  const payload = {
    title: fields.title.value.trim(),
    date: new Date(fields.date.value).toISOString(),
    location: fields.location.value.trim(),
    details: fields.details.value.trim(),
  };

  submitButton.disabled = true;
  setStatus("Sending your sighting…");

  try {
    await createSighting(payload);
    form.reset();
    setStatus("Sighting submitted. Thank you for sharing.", "success");
  } catch (err) {
    setStatus(err.message || "Something went wrong. Try again.", "error");
  } finally {
    submitButton.disabled = false;
  }
});
