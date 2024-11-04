document.getElementById('calculateButton').addEventListener('click', function() {
    // Get the RGB values from the inputs
    const r = parseInt(document.getElementById('red').value) || 0;
    const g = parseInt(document.getElementById('green').value) || 0;
    const b = parseInt(document.getElementById('blue').value) || 0;
  
    // Calculate luminance using the formula
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  
    // Display the luminance value
    document.getElementById('luminanceValue').textContent = luminance.toFixed(2);
  });