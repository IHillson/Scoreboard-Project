import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"
import { propertyPlaceholderObj } from "./properties/placeholderProperty.js"

function createCardHTML({ propertyLocation, priceGBP, comment, image, roomsM2 }) {
    const totalSizeM2 = roomsM2.reduce((total, roomSize) => total + roomSize, 0);

    return `
        <section class="card">
            <img src="images/${image}">
            <div class="card-right">
                <h2>${propertyLocation}</h2>
                <h3>£${priceGBP.toLocaleString()}</h3>
                <p>${comment}</p>
                <h3>${totalSizeM2} m&sup2;</h3>
            </div>
        </section>
    `
}

function getPropertyHtml(propertiesArr = [propertyPlaceholderObj]) {
    return propertiesArr.map(createCardHTML).join('')
}


document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)