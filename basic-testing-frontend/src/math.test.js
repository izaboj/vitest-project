import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all numbers in an array", () => {
  // arrange
  const numbers = [1, 2, 3];

  // act
  const result = add(numbers);

  //assert
  const expected = numbers.reduce(
    (prevValue, currentValue) => currentValue + prevValue,
    0
  );
  expect(result).toBe(expected);
});

it("should summaraize all strings numbers in an array", () => {
  const input = ["1", "2"];

  const result = add(input);

  const expected = input.reduce(
    (prevValue, currentValue) => +prevValue + +currentValue,
    0
  );
  expect(result).toBe(expected);
});

it("should return NaN in case of invalid value", () => {
  const input = [1, "invalid"];

  const result = add(input);

  expect(result).toBeNaN(result);
});

it("should be sum = 0 in case of empty array", () => {
  const input = [];

  const result = add(input);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});

it("should throw an error if passed many arguments instead of array", () => {
  const [num1, num2] = [1, 2];

  const resultFn = () => {
    add(num1, num2);
  };
  expect(resultFn).toThrow();
});
