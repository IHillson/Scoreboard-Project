import { readFile } from "node:fs/promises"
import { join, extname } from "node:path"

const MIME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
}

const ROUTES = {
    "/": "index.html",
    "/index.html": "index.html",
    "/index.js": "index.js",
}

export async function handleFiles(req, res, baseDir) {
    const { pathname } = new URL(req.url, `http://${req.headers.host}`)

    const fileName = ROUTES[pathname]

    if (!)
}