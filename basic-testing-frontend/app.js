import { getDataAndExtract } from "./src/parser.js";
import { outputResult } from "./src/util/output.js";
import { cleanInputs } from "./src/util/numbers.js";
import { add } from "./src/math.js";
import { transformToNumber } from "./src/util/numbers.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs = getDataAndExtract(form);

  let result = "";

  try {
    const numbers = cleanInputs(numberInputs);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  outputResult(result);
}

form.addEventListener("submit", formSubmitHandler);
