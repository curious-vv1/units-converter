//Code for length conversion\

// Get references to the select elements and input fields
const selectFrom = document.getElementById('selectfr');
const selectTo = document.getElementById('selectto');
const inputFrom = document.getElementById('select1fr');
const inputTo = document.getElementById('select1to');

// Add event listeners to the select elements
selectFrom.addEventListener('change', convertUnits);
selectTo.addEventListener('change', convertUnits);
inputFrom.addEventListener('input', convertUnits);

// Conversion factors for different units
const conversionFactors = {
  1: 1000000, // Kilometer
  2: 1000, // Meter
  3: 10, // Centimeter
  4: 1 // Millimeter
};

function convertUnits() {
  const fromUnit = selectFrom.value;
  const toUnit = selectTo.value;
  const fromValue = parseFloat(inputFrom.value) || 0;

  if (fromUnit === '0' || toUnit === '0') {
    inputTo.value = '';
    return;
  }

  const baseValue = fromValue * conversionFactors[fromUnit];
  const convertedValue = baseValue / conversionFactors[toUnit];
  inputTo.value = convertedValue.toFixed(6);
}