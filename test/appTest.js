const assert = require("chai").assert;
const hello = require("../src/app.js").hello;
const addNumbers = require("../src/app.js").addNumber;

describe("app", () => {

  context("hello function", () => {
    it("should return hello", () => {
      let result = hello();
      assert.equal(result, "hello");
    });

    it("should return a string type", () => {
      let result = hello();
      assert.typeOf(result, "string");
    });
  });

  context("addNumbers function", () => {
    it("should return value bigger than 5", () => {
      let result = addNumbers(1, 6);
      assert.isAbove(result, 5);
    });

    it("should return a number type", () => {
      let result = addNumbers(1, 6);
      assert.typeOf(result, "number");
    });
  });
});