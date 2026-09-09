import http from "node:http"
import { getDataFromDB } from "./database/db.js"
import { sendJSONResponse } from "./utils/sendJSONResponse.js"
import { getDataByPathParams } from "./utils/getDataByPathParam.js"
import { getDataByQueryParams } from "./utils/getDataByQueryParams.js"

const PORT = 8000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()
    
    const urlObj = new URL(req.url, `http://${req.headers.host}`)

    const queryObj = Object.fromEntries(urlObj.searchParams)


    if (urlObj.pathname === "/api" && req.method === "GET") {
        let filteredDestinations = destinations
        
        console.log(queryObj)
        
        filteredDestinations = getDataByQueryParams(destinations, queryObj.locationType, queryObj.locationName, queryObj.status)

        sendJSONResponse(res, 200, filteredDestinations)

    } else if (req.url.startsWith("/api/continent/") && req.method === "GET") {
        const continent = req.url.split("/").pop()
        const filteredDestinations = getDataByPathParams(destinations, "continent", continent)
        sendJSONResponse(res, 200, filteredDestinations)

    } else if (req.url.startsWith("/api/country/") && req.method === "GET") {
        const country = req.url.split("/").pop()
        const filteredDestinations = getDataByPathParams(destinations, "country", country)
        sendJSONResponse(res, 200, filteredDestinations)
    
    } else {
        sendJSONResponse(res, 404, {
            error: "Not Found",
            message: "The requested route does not exist. Please check the URL and try again."
        })
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})