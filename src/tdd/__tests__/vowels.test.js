import { replaceVowels } from "../vowels.js";
import { describe, expect, it } from "vitest";

describe("replaceVowels function", () => {
  it('Should replace all vowels with "x"', () => {
    expect(replaceVowels("hello")).toBe("hxllx");
  });

  it('Should replace vowels with "x" in a mixed-case string', () => {
    expect(replaceVowels("XyZ")).toBe("XyZ");
  });

  it('Should replace vowels with "x" in a string with no vowels', () => {
    expect(replaceVowels("xyz")).toBe("xyz");
  });

  it('Should replace all vowels with "x" in an empty string', () => {
    expect(replaceVowels("")).toBe("");
  });

  it('Should replace all vowels with "x" in a string containing only "x"', () => {
    expect(replaceVowels("xxx")).toBe("xxx");
  });

  it('Should replace all vowels with "x" in a string with multiple vowels', () => {
    expect(replaceVowels("programming")).toBe("prxgrxmmxng");
  });

  it("Should throw TypeError if the argument is not a string", () => {
    expect(() => replaceVowels(123)).toThrow(TypeError);
    expect(() => replaceVowels(true)).toThrow(TypeError);
  });
});
