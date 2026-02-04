const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");

const colorPicker = document.getElementById("colorPicker");

function clamp(value) {
    return Math.max(0, Math.min(255, value));
}

function updateColorFromInputs() {
    const r = clamp(red.value);
    const g = clamp(green.value);
    const b = clamp(blue.value);

    redNum.value = r;
    greenNum.value = g;
    blueNum.value = b;

    applyColor(r, g, b);
}

function updateColorFromNumbers() {
    const r = clamp(redNum.value);
    const g = clamp(greenNum.value);
    const b = clamp(blueNum.value);

    red.value = r;
    green.value = g;
    blue.value = b;

    applyColor(r, g, b);
}

function applyColor(r, g, b) {
    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbValue.textContent = rgb;

    const hex = "#" +
        Number(r).toString(16).padStart(2, "0") +
        Number(g).toString(16).padStart(2, "0") +
        Number(b).toString(16).padStart(2, "0");

    const hexUpper = hex.toUpperCase();
    hexValue.textContent = hexUpper;
    colorPicker.value = hexUpper;
}


function hexToRgb(hex) {
    return {
        r: parseInt(hex.substring(1, 3), 16),
        g: parseInt(hex.substring(3, 5), 16),
        b: parseInt(hex.substring(5, 7), 16)
    };
}

// Eventos sliders
red.addEventListener("input", updateColorFromInputs);
green.addEventListener("input", updateColorFromInputs);
blue.addEventListener("input", updateColorFromInputs);

// Eventos inputs numéricos
redNum.addEventListener("input", updateColorFromNumbers);
greenNum.addEventListener("input", updateColorFromNumbers);
blueNum.addEventListener("input", updateColorFromNumbers);

colorPicker.addEventListener("input", () => {
    const { r, g, b } = hexToRgb(colorPicker.value);

    red.value = r;
    green.value = g;
    blue.value = b;

    redNum.value = r;
    greenNum.value = g;
    blueNum.value = b;

    applyColor(r, g, b);
});

// Inicializar
updateColorFromInputs();
