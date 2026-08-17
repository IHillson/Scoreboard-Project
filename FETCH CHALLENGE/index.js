async function fetchUserActivity() {
    try {
        const response = await fetch('https://apis.scrimba.com/bored/api/activity')
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
       
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error('Fetch operation failed', error)
    } finally {
        console.log('The operation completed.')
    }
}

fetchUserActivity()

// async function getSuggestion() {
//     const response = fetch('https://apis.scrimba.com/bored/api/activity')
//     const data = await response.json()
//     console.log(data)
// }
// getSuggestion()

// async function getRandomDog() {
//     try {
//         const response = await fetch('https://apis.scrimba.com/bored/api/activity')
//         const data = await response.json()
//         console.log(data)
//         return data
//     } catch (err) {
//         throw new Error('Fetch operation failed!', err)
//     } finally {
//         console.log('The operation completed.')
//     }
// }
