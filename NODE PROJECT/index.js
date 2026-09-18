try {
    const data = await fetch("/api")
    const response = await data.json()
    renderCards(response)
} catch (err) {
    console.log(err)
}

function renderCards(cardsData) {
    const container = document.querySelector(".cards-container")
    let cardsHTML = ""
    cardsData.forEach((cardsData, i) => {
        cardsHTML += `
        <article class="sighting-card" aria-labelledby="sighting-title-${i}">
            <p class="card-datails">${card.timeStamp}, ${card.location}</p>
            <h3 id="sighting-title-${i}">${card.title}<h3>
            <div class="sighting-text-wrapper">
                <p class="sighting-text">${card.text}</p>
            </div>
            <button class="read-more-btn" aria-expanded="false">Read in full</button>
        </article>
        `
    })
    container.innerHTML = cardsHTML
}

// handle card expand/collapse
document.querySelector(".cards-container").addEventListener("click", (e) => {
    
})