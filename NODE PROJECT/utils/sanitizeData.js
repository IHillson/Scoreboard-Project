import sanitizeHtml from "sanitize-html"
import { addNewSighting } from "./addNewSighting"

const toBeSanitized = addNewSighting(newSighting)
const sanitized = sanitizeHtml(toBeSanitized, {
    allowedTags: ['b'],
    allowedAttributes: false
})