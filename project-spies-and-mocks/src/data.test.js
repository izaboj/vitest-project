import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should check if logFn was called", () => {
    const logger = vi.fn();
    generateReportData(logger);
    expect(logger).toBeCalled();
  });
});
