const isNumberOne = require("./index");

test("returns true if type of number and is 1", () => {
  expect(isNumberOne(1)).toBe(true);
  expect(isNumberOne(0o1)).toBe(true);
});

test("returns false if type of number but is not 1", () => {
  expect(isNumberOne(2)).toBe(false);
  expect(isNumberOne(0o2)).toBe(false);
});

test("returns false if string", () => {
  expect(isNumberOne("1")).toBe(false);
  expect(isNumberOne("one")).toBe(false);
});

test("returns false if boolean", () => {
  expect(isNumberOne(true)).toBe(false);
  expect(isNumberOne(false)).toBe(false);
});

test("returns false if type of object", () => {
  expect(isNumberOne({})).toBe(false);
  expect(isNumberOne([])).toBe(false);
  expect(isNumberOne(["1"])).toBe(false);
});
