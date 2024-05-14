// script.js

function convertTemperature() {
    // Get input value and unit
    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;

    // Check if the input is a valid number
    if (isNaN(temperature)) {
        alert("Please enter a valid temperature.");
        return;
    }

    // Convert temperature
    let result;
    if (unit === "celsius") {
        result = (temperature * 9/5) + 32;
        document.getElementById("result").innerText = `${temperature}°C is equal to ${result.toFixed(2)}°F.`;
    } else {
        result = (temperature - 32) * 5/9;
        document.getElementById("result").innerText = `${temperature}°F is equal to ${result.toFixed(2)}°C.`;
    }
}
