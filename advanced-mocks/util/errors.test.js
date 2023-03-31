import { it, expect, describe } from "vitest";
import { ValidationError, HttpError } from "./errors";

describe("class HttpError", () => {
  it("should contains arrtibutes statusCode, message and data", () => {
    const statusCode = 200;
    const message = "error message";
    const data = { type: 3 };

    const httpError = new HttpError(statusCode, message, data);
    expect(httpError.statusCode).toBe(statusCode);
    expect(httpError.message).toBe(message);
    expect(httpError.data).toBe(data);
  });
  it("should data be undefined if no data is provided", () => {
    const statusCode = 200;
    const message = "error message";

    const httpError = new HttpError(statusCode, message);
    expect(httpError.statusCode).toBe(statusCode);
    expect(httpError.message).toBe(message);
    expect(httpError.data).toBeUndefined;
  });
});

describe("class ValidationError", () => {
  it("should contains message atribute if it is passed", () => {
    const message = "validation error";

    const error = new ValidationError(message);
    expect(error.message).to.equal("validation error");
  });
});
