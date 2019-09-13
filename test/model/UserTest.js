const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies)

const expect = chai.expect;
const sandbox = chai.spy.sandbox();
const User = require("../../model/User");

context("User.js file", () => {
  describe("constructor", () => {
    beforeEach(() => {
      user = new User();
    });

    it("should construct NAME as null", () => {
      expect(user.name).to.be.null;
    });

    it("should construct FULLNAME as null", () => {
      expect(user.lastName).to.be.null;
    });
  });

  describe("isAvailableToBuildFullName", () => {
    beforeEach(() => {
      user = new User();
    });

    it("should return ERROR when no NAME is provided", () => {
      expect(() => {
        user.isAvailableToBuildFullName();
      }).to.throw(Error);
    });

    it("should return ERROR when no LASTNAME is provided", () => {
      expect(() => {
        user.isAvailableToBuildFullName();
      }).to.throw(Error);
    });
  });

  describe("buildFullName", () => {
    beforeEach(() => {
      user = new User();
    });

    it("isAvailableToBuildFullName should be called", () => {
      // arrange
      sandbox.on(user, "isAvailableToBuildFullName");
      // act
      user.buildFullName("Luis", "Valgoi");
      // assert
      expect(user.isAvailableToBuildFullName).to.have.been.called;
      // restore
      sandbox.restore(user);
    });
  });

  describe("getFullName", () => {
    it("should return an N/A string WHEN no args are passed", () => {
      let user = new User();
      let fullName = user.getFullName();
      expect(fullName).to.be.a("string").and.to.be.equal("N/A");
    });

    it("should return a contained string WHEN no args are passed", () => {
      let user = new User("us", "guri");
      let fullName = user.getFullName();
      expect(fullName).to.be.a("string").and.to.have.length.above(0);
    });
  });
});