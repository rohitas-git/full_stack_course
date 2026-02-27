
let inputNumber = document.getElementById("input-number");
let convertBtn = document.getElementById("convert-btn");
let lengthResult = document.getElementById("length-result");
let volumeResult = document.getElementById("volume-result");
let massResult = document.getElementById("mass-result");

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

if (inputNumber.value === "") {
    lengthResult.textContent = "Enter a number to convert";
    volumeResult.textContent = "Enter a number to convert";
    massResult.textContent = "Enter a number to convert";
}

convertBtn.addEventListener("click", function() {
    let number = parseFloat(inputNumber.value);
    if (isNaN(number)) {
        alert("Please enter a valid number");
        return;
    }
    lengthResult.textContent = convertLength(number);
    volumeResult.textContent = convertVolume(number);
    massResult.textContent = convertMass(number); 
});

function convertLength(number) {
    let meterToFeet = (number * 3.281).toFixed(3);
    let feetToMeter = (number / 3.281).toFixed(3);
    return `${number} meter = ${meterToFeet} feet | ${number} feet = ${feetToMeter} meter`;
}

function convertVolume(number) {
    let literToGallon = (number * 0.264).toFixed(3);
    let gallonToLiter = (number / 0.264).toFixed(3);
    return `${number} liter = ${literToGallon} gallon | ${number} gallon = ${gallonToLiter} liter`;
}

function convertMass(number) {
    let kilogramToPound = (number * 2.204).toFixed(3);
    let poundToKilogram = (number / 2.204).toFixed(3);
    return `${number} kilogram = ${kilogramToPound} pound | ${number} pound = ${poundToKilogram} kilogram`;
}