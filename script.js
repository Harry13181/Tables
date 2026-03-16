const operationSelect = document.getElementById("operation");
const baseNumberInput = document.getElementById("baseNumber");
const startRangeInput = document.getElementById("startRange");
const endRangeInput = document.getElementById("endRange");
const hideAnswersCheckbox = document.getElementById("hideAnswers");
const generateBtn = document.getElementById("generateBtn");
const outputArea = document.getElementById("output");

generateBtn.addEventListener("click", function () {
  const operation = operationSelect.value;
  const baseNumber = parseInt(baseNumberInput.value);
  const start = parseInt(startRangeInput.value);
  const end = parseInt(endRangeInput.value);
  const hideAnswers = hideAnswersCheckbox.checked;

  outputArea.innerHTML = "";
  let tableHTML = "";

  for (let i = start; i <= end; i++) {
    let result = 0;
    let symbol = "";

    if (operation === "multiply") {
      result = baseNumber * i;
      symbol = "&times;";
    } else if (operation === "add") {
      result = baseNumber + i;
      symbol = "+";
    } else if (operation === "subtract") {
      result = baseNumber - i;
      symbol = "-";
    } else if (operation === "divide") {
      let rawResult = baseNumber / i;
      result = Number.isInteger(rawResult) ? rawResult : rawResult.toFixed(2);
      symbol = "&divide;";
    }

    let displayResult = hideAnswers ? "_____" : `<strong>${result}</strong>`;

    tableHTML += `${baseNumber} ${symbol} ${i} = ${displayResult}<br>`;
  }

  outputArea.innerHTML = tableHTML;
});
