import { it, expect, describe } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken()", () => {
  it("should generate web Token", (done) => {
    const testEmail = "test@test.com";
    generateToken(testEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});

describe("generateTokenPromise()", () => {
  //.resolves
  it("should return json token", () => {
    const testEmail = "test@test.com";
    return expect(generateTokenPromise(testEmail)).resolves.toBeDefined();
  });
  // async/await
  it("should return json token", async () => {
    const testEmail = "test@test.com";
    const token = await generateTokenPromise(testEmail);
    expect(token).toBeDefined();
  });
});
