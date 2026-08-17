fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        const imageElement = document.createElement('img')
        imageElement.src = data.message
        imageElement.alt = 'random dog picture'
        document.getElementById("img-container").appendChild(imageElement)
    })

    // // POST REQUEST
    // try {
    //     const response = await fetch('https://apis.scrimba.com/placeholder/post',
    //         {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 title: 'Holiday Nigthmares',
    //                 body: 'When I was kidnapped in Scotland..',
    //                 userId: 101
    //             }),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //     if (!response.ok) {
    //         throw new Error('There is a problem with the API')
    //     }
    //     const data = await response.json()
    //     console.log(data)
    // } catch (err) {
    //     console.log(err) 
    // }

    // // PUT REQUEST
    // try {
    //     const response = await fetch('https://apis.scrimba.com/placeholder/posts/1', {
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             id: 1,
    //             title: 'Updated Post Title',
    //             body: 'Updated post content.',
    //             userId: 101
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     if (!response.ok) {
    //         throw new Error('There is a problem with the API')
    //     }
    //     const data = await response.json()
    //     console.log(data)
    // } catch (err) {
    //     console.log(err)
    // }

    // // PATCH REQUEST
    // try {
    //     const response = await fetch('https://apis.scrimba.com/placeholder/posts/1', {
    //         method: 'PATCH',
    //         body: JSON.stringify({
    //             title: 'Updated Post Title',
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     if (!response.ok) {
    //         throw new Error('There is a problem with the API')
    //     }
    //     const data = await response.json()
    //     console.log(data)
    // } catch (err) {
    //     console.log(err)
    // }
