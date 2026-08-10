function getPropertyHtml() {

}

// Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties folder').
// Each card should have an Image, a property location, a PromiseRejectionEvent, a comment and the TOTAL property
// size in square metres (each object has an array with the size in square metres of the individual rooms).

/* <section class="card">
    <img src="/images/IMAGE"></img>
    <div class="card-right">
        <h2>PROPERTY LOCATION</h2>
        <h3>PRICE GBP</h3>
        <p>COMMENT</p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section> */

document.getElementById('container').innerHTML = getPropertyHtml()