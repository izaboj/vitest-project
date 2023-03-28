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

// describe("cleanInputs()", () => {
//   it("should return array of numbers", () => {
//     const input = [1, 2];
//     const input2 = ["1", 2];
//     const input3 = ["1", "2"];

//     const result = cleanInputs(input);
//     const result2 = cleanInputs(input2);
//     const result3 = cleanInputs(input3);

//     const expected_result = [1, 2];
//     expect(result).toBe(expected_result);
//     expect(result2).toBe(expected_result);
//     expect(result3).toBe(expected_result);
//   });
// });
