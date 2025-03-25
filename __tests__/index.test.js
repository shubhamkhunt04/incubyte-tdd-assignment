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

