export function prepareResultText(result) {
  let resultText = "";

  if (result === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (result !== "no-calc") {
    resultText = "Result: " + result;
  }

  return resultText;
}

export function outputResult(result) {
  const output = document.getElementById("result");
  output.textContent = prepareResultText(result);
}
