import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"
import { parseJSONBody } from "../utils/parseJSONBody.js"
import { sanitizeData } from "../utils/sanitizeData.js"
import { addNewSighting } from "../utils/addNewSighting.js"

//handleGet
export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, "application/json", content)
}

//handlePost
export async function handlePost(req, res) {
    try {
        const parsedBody = await parseJSONBody(req)
        await addNewSighting(parsedBody)
        sendResponse(res, 201, "application/json", JSON.stringify(parsedBody))
    } catch(err) {
        sendResponse(res, 400, "application/json", JSON.stringify({error: err}))
    }
    const sanitizedData = sanitizeData(parsedBody)
    // Implementation for handling POST requests
}