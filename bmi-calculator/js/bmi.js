function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const bmi = weight / (height * height);
    const resultElement = document.getElementById('result');

    let interpretation = '';

    if (bmi < 18.5) {
      interpretation = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      interpretation = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      interpretation = 'Overweight';
    } else {
      interpretation = 'Obese';
    }

    resultElement.textContent = `Your BMI: ${bmi.toFixed(2)} - ${interpretation}`;
  }