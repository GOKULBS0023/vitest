import sum from "./sum";
import { describe, expect, it } from "vitest";

describe("#sum", () => {
  it("return 0 with no numbers", () => {
    expect(sum()).toBe(0);
  });
  it("return same number with one number", () => {
    expect(sum(10)).toBe(10);
  });
  it("return sum with multiple numbers", () => {
    expect(sum(10, 20, 30)).toBe(60);
  });
});
