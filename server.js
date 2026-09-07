import http from "node:http"
import { getDataFromDB } from "./Wild Horizons/database/db.js"

const PORT = 8000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()
    if (req.url === "/api" && req.method === "GET") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(destinations))
    } else {
        res.statusCode = 404
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({
            status: 404,
            error: "Not Found",
            message: "The requested route does not exist. Please check the URL and try again."
        }))
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})