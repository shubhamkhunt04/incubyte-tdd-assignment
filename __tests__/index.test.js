const add = require("../index");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number itself when a single number is given", () => {
  expect(add("1")).toBe(1);
});

test("returns sum when two numbers are given", () => {
  expect(add("1,5")).toBe(6);
});

test("returns sum for multiple numbers", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

test("handles new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws error for negative numbers", () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});


