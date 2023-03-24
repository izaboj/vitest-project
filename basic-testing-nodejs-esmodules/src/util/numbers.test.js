import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

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
