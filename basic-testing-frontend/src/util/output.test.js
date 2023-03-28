import { it, expect, describe } from "vitest";
import { prepareResultText } from "./output";

describe("prepareResultText()", () => {
  it("should return string for all inputs", () => {
    const input = 1;
    const input2 = "invalid";
    const input3 = true;

    const textResult = prepareResultText(input);
    const textResult2 = prepareResultText(input2);
    const textResult3 = prepareResultText(input3);

    expect(textResult).toBeTypeOf("string");
    expect(textResult2).toBeTypeOf("string");
    expect(textResult3).toBeTypeOf("string");
  });
  it('should return text containing "Result:" text ', () => {
    const result = 3;
    const textResult = prepareResultText(result);

    expect(textResult).toMatch(/Result: 3/);
  });
  it("should return text with text Invalid input...", () => {
    const result = "invalid";
    const textResult = prepareResultText(result);

    expect(textResult).toMatch(/Invalid input/);
  });
});
// describe("outputResult()", () => {});
