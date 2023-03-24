import { it, expect, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should return undefined for passed string", () => {
    const string = "valid";

    const result = validateStringNotEmpty(string);

    expect(result).toBeUndefined();
  });
  it("should not throw error for valid string", () => {
    const string = "valid";

    const resultFn = () => validateStringNotEmpty(string);

    expect(resultFn).not.toThrow();
  });

  it("should throw an error for empty string", () => {
    const string = "";

    const resultFn = () => validateStringNotEmpty(string);

    expect(resultFn).toThrow("Invalid input - must not be empty");
  });

  it("should throw an error for input different than string", () => {
    const inputNr = 2;
    const inputObj = {};
    const inputBool = true;

    const resultNr = () => validateStringNotEmpty(inputNr);
    const resultObj = () => validateStringNotEmpty(inputObj);
    const resultBool = () => validateStringNotEmpty(inputBool);

    expect(resultNr).toThrow();
    expect(resultObj).toThrow();
    expect(resultBool).toThrow();
  });
});
describe("validateNumber()", () => {
  it("should return undefined if passed correct number or converted to number", () => {
    const number = 3;
    const number2 = "3";

    const result = validateNumber(number);
    const result2 = validateNumber(number2);

    expect(result).toBeUndefined();
    expect(result2).toBeUndefined();
  });

  it("should throw an error for NaN input", () => {
    const string = "invalid";

    const resultFn = () => validateNumber(string);

    expect(resultFn).toThrow(/Invalid number input/);
  });

  it("should throw an error for NaN input", () => {
    const string = NaN;

    const resultFn = () => validateNumber(string);

    expect(resultFn).toThrow(/Invalid number input/);
  });
});
