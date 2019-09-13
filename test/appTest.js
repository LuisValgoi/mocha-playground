const assert = require("chai").assert;
const app = require("../app.js");

describe("app", () => {
  it("should return hello", () => {
    assert.equal(app(), "hello");
  });
});