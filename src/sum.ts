export default function sum(...numbers: number[]) {
  return numbers.reduce((total, number) => total + number, 0);
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

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
}
