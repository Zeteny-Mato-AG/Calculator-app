function showMathForm(shape) {
    const formContainer = document.getElementById("math-form");
    const resultContainer = document.getElementById("math-result");
    let formHtml = '';
  
    if (shape === 'rectangle') {
      formHtml = `
        <input type="number" id="length" placeholder="Enter Length">
        <select id="length-unit">
          <option value="m">meters</option>
          <option value="cm">centimeters</option>
          <option value="ft">feet</option>
          <option value="in">inches</option>
        </select>
        <input type="number" id="width" placeholder="Enter Width">
        <select id="width-unit">
          <option value="m">meters</option>
          <option value="cm">centimeters</option>
          <option value="ft">feet</option>
          <option value="in">inches</option>
        </select>
        <button onclick="calculateRectangleArea()">Calculate</button>
      `;
    } else if (shape === 'square') {
      formHtml = `
        <input type="number" id="side" placeholder="Enter Side">
        <select id="side-unit">
          <option value="m">meters</option>
          <option value="cm">centimeters</option>
          <option value="ft">feet</option>
          <option value="in">inches</option>
        </select>
        <button onclick="calculateSquareArea()">Calculate</button>
      `;
    } else if (shape === 'triangle') {
      formHtml = `
        <input type="number" id="base" placeholder="Enter Base">
        <select id="base-unit">
          <option value="m">meters</option>
          <option value="cm">centimeters</option>
          <option value="ft">feet</option>
          <option value="in">inches</option>
        </select>
        <input type="number" id="height" placeholder="Enter Height">
        <select id="height-unit">
          <option value="m">meters</option>
          <option value="cm">centimeters</option>
          <option value="ft">feet</option>
          <option value="in">inches</option>
        </select>
        <button onclick="calculateTriangleArea()">Calculate</button>
      `;
    }
  
    formContainer.innerHTML = formHtml;
    resultContainer.innerHTML = ''; // Clear previous results
  }
  
  function calculateRectangleArea() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const lengthUnit = document.getElementById("length-unit").value;
    const widthUnit = document.getElementById("width-unit").value;
  
    if (isNaN(length) || isNaN(width) || length < 0 || width < 0) {
      alert("Please enter valid non-negative numbers.");
      return;
    }
  
    const area = length * width;
    const resultContainer = document.getElementById("math-result");
    resultContainer.innerHTML = `Area of the rectangle is: ${area.toFixed(2)} ${lengthUnit}²`;
  }
  
  function calculateSquareArea() {
    const side = parseFloat(document.getElementById("side").value);
    const sideUnit = document.getElementById("side-unit").value;
  
    if (isNaN(side) || side < 0) {
      alert("Please enter a valid non-negative number.");
      return;
    }
  
    const area = side ** 2;
    const resultContainer = document.getElementById("math-result");
    resultContainer.innerHTML = `Area of the square is: ${area.toFixed(2)} ${sideUnit}²`;
  }
  
  function calculateTriangleArea() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);
    const baseUnit = document.getElementById("base-unit").value;
  
    if (isNaN(base) || isNaN(height) || base < 0 || height < 0) {
      alert("Please enter valid non-negative numbers.");
      return;
    }
  
    const area = 0.5 * base * height;
    const resultContainer = document.getElementById("math-result");
    resultContainer.innerHTML = `Area of the triangle is: ${area.toFixed(2)} ${baseUnit}²`;
  }
  