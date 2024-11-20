function showMathForm(shape) {
  const formContainer = document.getElementById("math-form");
  const resultContainer = document.getElementById("math-result");
  let formHtml = `
    <label for="unit">Select Unit:</label>
    <select id="unit">
      <option value="m">meters</option>
      <option value="cm">centimeters</option>
      <option value="ft">feet</option>
      <option value="in">inches</option>
    </select>
  `;

  if (shape === 'rectangle') {
    formHtml += `
      <input type="number" id="length" placeholder="Enter Length">
      <input type="number" id="width" placeholder="Enter Width">
      <button onclick="calculateRectangleArea()">Calculate</button>
    `;
  } else if (shape === 'square') {
    formHtml += `
      <input type="number" id="side" placeholder="Enter Side">
      <button onclick="calculateSquareArea()">Calculate</button>
    `;
  } else if (shape === 'triangle') {
    formHtml += `
      <input type="number" id="base" placeholder="Enter Base">
      <input type="number" id="height" placeholder="Enter Height">
      <button onclick="calculateTriangleArea()">Calculate</button>
    `;
  }

  formContainer.innerHTML = formHtml;
  resultContainer.innerHTML = ''; // Clear previous results
}

function calculateRectangleArea() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);
  const unit = document.getElementById("unit").value;

  if (isNaN(length) || isNaN(width) || length < 0 || width < 0) {
    alert("Please enter valid non-negative numbers.");
    return;
  }

  const area = length * width;
  document.getElementById("math-result").innerHTML = `Area of the rectangle is: ${area.toFixed(2)} ${unit}²`;
}

function calculateSquareArea() {
  const side = parseFloat(document.getElementById("side").value);
  const unit = document.getElementById("unit").value;

  if (isNaN(side) || side < 0) {
    alert("Please enter a valid non-negative number.");
    return;
  }

  const area = side ** 2;
  document.getElementById("math-result").innerHTML = `Area of the square is: ${area.toFixed(2)} ${unit}²`;
}

function calculateTriangleArea() {
  const base = parseFloat(document.getElementById("base").value);
  const height = parseFloat(document.getElementById("height").value);
  const unit = document.getElementById("unit").value;

  if (isNaN(base) || isNaN(height) || base < 0 || height < 0) {
    alert("Please enter valid non-negative numbers.");
    return;
  }

  const area = 0.5 * base * height;
  document.getElementById("math-result").innerHTML = `Area of the triangle is: ${area.toFixed(2)} ${unit}²`;
}

function showOhmsForm(type) {
  const formContainer = document.getElementById("ohms-form");
  const resultContainer = document.getElementById("ohms-result");
  let formHtml = '';

  if (type === 'voltage') {
    formHtml = `
      <input type="number" id="current" placeholder="Enter Current (I)">
      <input type="number" id="resistance" placeholder="Enter Resistance (R)">
      <button onclick="calculateVoltage()">Calculate</button>
    `;
  } else if (type === 'current') {
    formHtml = `
      <input type="number" id="voltage" placeholder="Enter Voltage (V)">
      <input type="number" id="resistance" placeholder="Enter Resistance (R)">
      <button onclick="calculateCurrent()">Calculate</button>
    `;
  } else if (type === 'resistance') {
    formHtml = `
      <input type="number" id="voltage" placeholder="Enter Voltage (V)">
      <input type="number" id="current" placeholder="Enter Current (I)">
      <button onclick="calculateResistance()">Calculate</button>
    `;
  }

  formContainer.innerHTML = formHtml;
  resultContainer.innerHTML = ''; // Clear previous results
}

function calculateVoltage() {
  const current = parseFloat(document.getElementById("current").value);
  const resistance = parseFloat(document.getElementById("resistance").value);

  if (isNaN(current) || isNaN(resistance) || current < 0 || resistance < 0) {
    alert("Please enter valid non-negative numbers.");
    return;
  }

  const voltage = current * resistance;
  document.getElementById("ohms-result").innerHTML = `Voltage is: ${voltage.toFixed(2)} V`;
}

function calculateCurrent() {
  const voltage = parseFloat(document.getElementById("voltage").value);
  const resistance = parseFloat(document.getElementById("resistance").value);

  if (isNaN(voltage) || isNaN(resistance) || voltage < 0 || resistance < 0) {
    alert("Please enter valid non-negative numbers.");
    return;
  }

  const current = voltage / resistance;
  document.getElementById("ohms-result").innerHTML = `Current is: ${current.toFixed(2)} A`;
}

function calculateResistance() {
  const voltage = parseFloat(document.getElementById("voltage").value);
  const current = parseFloat(document.getElementById("current").value);

  if (isNaN(voltage) || isNaN(current) || voltage < 0 || current < 0) {
    alert("Please enter valid non-negative numbers.");
    return;
  }

  const resistance = voltage / current;
  document.getElementById("ohms-result").innerHTML = `Resistance is: ${resistance.toFixed(2)} Ω`;
}
