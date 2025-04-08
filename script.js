function calculate() {
    const val1 = parseFloat(document.getElementById('val1').value);
    const val2 = parseFloat(document.getElementById('val2').value);
    const operation = document.getElementById('selectOperation').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(val1) || isNaN(val2) || !operation) {
      resultDiv.textContent = "Please enter valid numbers and select an operation.";
      resultDiv.classList.remove("text-success");
      resultDiv.classList.add("text-danger");
      return;
    }

    let result;
    switch (operation) {
      case 'add':
        result = val1 + val2;
        break;
      case 'subtract':
        result = val1 - val2;
        break;
      case 'multiply':
        result = val1 * val2;
        break;
      case 'divide':
        result = val2 !== 0 ? val1 / val2 : 'Error (division by zero)';
        break;
    }

    resultDiv.textContent = `Result: ${result}`;
    resultDiv.classList.remove("text-danger");
    resultDiv.classList.add("text-success");
  }