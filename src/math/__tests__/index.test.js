import { add } from "..";
import { describe, it, expect } from "vitest";

describe("add function", () => {
  const testData = [
    [2, 3, 5],
    [2, -3, -1],
    [-3, -2, -5],
    [2, 0, 2],
    [0.1, 0.2, 0.3],
  ];

  it("should throw TypeError if arguments are not numbers", () => {
    expect(() => add("2", 3)).toThrow(TypeError);
    expect(() => add(2, "3")).toThrow(TypeError);
    expect(() => add("2", "3")).toThrow(TypeError);
  });

  it.each(testData)("should return the sum of %d and %d", (a, b, expected) => {
    expect(add(a, b)).toBeDefined();

    if (Number.isInteger(expected)) {
      expect(add(a, b)).toBe(expected);
    } else {
      expect(add(a, b)).toBeCloseTo(expected);
    }
  });
});
