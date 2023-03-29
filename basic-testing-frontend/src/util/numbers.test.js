import { it, expect, describe } from "vitest";
import { transformToNumber, cleanInputs } from "./numbers";

it("should transform string number to number type of number", () => {
  const number = "1";

  const result = transformToNumber(number);

  expect(result).toBeTypeOf("number");
});

it("should transform string number to number type of number", () => {
  const number = "1";

  const result = transformToNumber(number);

  expect(result).toBe(1);
});

it("should return NaN when not-transormable value is passed", () => {
  const input = "invalid";

  const result = transformToNumber(input);

  expect(result).toBeNaN();
});

describe("cleanInputs()", () => {
  it("should return array of numbers", () => {
    const input = ["1", "2"];

    const result = cleanInputs(input);
    expect(result[0]).toBeTypeOf("number");
  });
  it("should throw error if input is invalid", () => {
    const input = ["1", ""];

    const returnFn = () => cleanInputs(input);

    expect(returnFn).toThrow();
  });
});
