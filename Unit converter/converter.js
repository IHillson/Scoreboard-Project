/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

Example of logic to implement
const oneMeterInFeet = 3.281
const metersToFeet = (conversionInputEl.value 
* oneMeterInFeet).toFixed(3)
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("length-output")
const volumeValue = document.getElementById("volume-output")
const massValue = document.getElementById("mass-output")

// const litersToGallon = (conversionInputEl.value * oneLiterInGallon).toFixed(3)
// const kilogramsToPounds = (conversionInputEl.value * oneKilogramInPounds).toFixed(3)

convertBtn.addEventListener("click", function() {
    convertedLength(inputEl.value)
    convertedVolume(inputEl.value)
    convertedMass(inputEl.value)
})

function convertedLength(num) {
    const oneMeterInFeet = (num * 3.281).toFixed(3)
    const oneFeetinMeter = (num * 0.305).toFixed(3)
    lengthOutput.textContent = `${num} meters = ${oneMeterInFeet} feet | ${num} feet = ${oneFeetinMeter} meters`
}

function convertedVolume(num) {
    const oneLiterInGallon = (num * 0.264).toFixed(3)
    const oneGalloninLitres = (num * 3.785).toFixed(3)
    volumeValue.textContent = `${num} liters = ${oneLiterInGallon} gallon | ${num} gallon = ${oneGalloninLitres} liters`
}

function convertedMass(num) {
    const oneKilogramInPounds = (num * 2.204).toFixed(3)
    const onePoundinKilogram = (num * 0.454).toFixed(3)
    massValue.textContent = `${num} kilograms = ${oneKilogramInPounds} pounds | ${num} pounds = ${onePoundinKilogram} kilograms`
}
