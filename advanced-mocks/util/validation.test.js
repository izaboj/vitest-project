import { it, expect, describe } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validateNotEmpty()", () => {
  it("should throw an error if text param not pass", () => {
    const text = "";
    const errorMessage = "test";
    const resultFn = () => validateNotEmpty(text, errorMessage);

    expect(resultFn).toThrow();
  });
  it("should throw an error if text param not pass", () => {
    const text = "  ";
    const errorMessage = "test";
    const resultFn = () => validateNotEmpty(text);

    expect(resultFn).toThrow();
  });
});
