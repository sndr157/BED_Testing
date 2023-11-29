import { describe, expect, it } from "vitest";
import factorial from "../factorial.js";

describe("factorial function", () => {
  it("Calculates the factorial of 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("Calculates the factorial of 5", () => {
    expect(factorial(5)).toBe(120);
  });

  it("Calculates the factorial of 10", () => {
    expect(factorial(10)).toBe(3628800);
  });

  it("Calculates the factorial of 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("Throws an error if the argument is a negative number", () => {
    expect(() => factorial(-1)).toThrow(RangeError);
  });
});
