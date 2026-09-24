export async function parseJSONBody(req) {
    let body = ""
    for await (const chunk of req) {
        body += chunk
        
    }
    try {
        return JSON.parse(body)
    } catch (err) {
        throw new Error(`Invalid JSON format:, ${err}`)
    }
}
    //     return new Promise((resolve, reject) => {
//         let body = ""
//         req.on("data", (chunk) => {
//             body += chunk.toString()
//         })
//         req.on("end", () => {
//             try {
//                 const rawBody = JSON.parse(body)
//                 resolve(rawBody)
//             } catch (error) {
//                 reject(error)
//             }
//         })
//     })
// }