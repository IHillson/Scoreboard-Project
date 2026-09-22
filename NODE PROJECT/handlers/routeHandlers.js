import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"

//handleGet
export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, "application/json", content)
}

//handlePost
export function handlePost(data) {
    // Implementation for handling POST requests
}