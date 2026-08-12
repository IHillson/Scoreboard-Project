import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"
import { propertyPlaceholderObj } from "./properties/placeholderProperty.js"

function createCardHTML({ propertyLocation, priceGBP, comment, image, roomsM2 }) {
    const totalSizeM2 = roomsM2.reduce((total, roomSize) => total + roomSize, 0);

    return `
        <section class="card">
            <img src="properties/${images}"></img>
            <div class="card-right">
                <h2>${propertyLocation}</h2>
                <h3>£${priceGBP.toLocaleString()}</h3>
                <p>${comment}</p>
                <h3>${totalSizeM2} m&sup2;</h3>
            </div>
        </section>
    `
}

function getPropertyHtml() {

}

// Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties folder').
// Each card should have an Image, a property location, a PromiseRejectionEvent, a comment and the TOTAL property
// size in square metres (each object has an array with the size in square metres of the individual rooms).



document.getElementById('container').innerHTML = getPropertyHtml()