# Welcome to the Mocha's continuation of this tutorial
- You already have a good picture of what is the Mocha framework.
- Now, let's go a little depper into it.

# Official Documentation Link
- https://mochajs.org/

# Helpers
- [Mocha's API Documentation](https://mochajs.org/api/index.html)
- [Get started with Mocha testing](https://ricostacruz.com/til/get-started-with-mocha)
- [A quick and complete guide to Mocha testing](https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/)

# How can we install into our project?
- Throught the `npm install mocha` command.

# What is Mocha?
> Mocha is a feature-rich JavaScript test framework running on Node.js. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases

# Running Script
- Set up a test script in package.json:
```javascript
"scripts": {
  "test": "mocha"
}
```

# Other Testing Frameworks
Sometimes we asked ourselves which are the other javascript testing frameworks...

Today, these one are the most used for JS.
- Mocha
- Jasmine
- QUnit

# Mocha Features
- Runs on Node.js/Browser 
- Supports BDD/TDD
- Choose any `Assertion` library
- Choose any `Mocking` library
- Async and promise support
- Optionally run tests that match a regexp

# BDD Code Example

```javascript
var expect = require('chai').expect

describe('my test suite', function() {
  it('fails majestically', function() {
    expect(3).to.eql(2)
  });
});
```

# Hooks
- These methods should be used to set up preconditions and clean up after your tests

```javascript
describe('hooks', function() {
  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
  it("some test goes here", function () {
    // code
  });
});
```
### Real use case:
  - Open [this](https://user-images.githubusercontent.com/8363610/66211443-7f7ca680-e692-11e9-8bdd-5316c90aac53.png) image.
  - You will see that the `statusListmodel` is used @ `beforeEach` hook.
  - The idea is that it runs before each test on the `statusListModel Test` context.

# Exclusive Tests
- The command `.only` allows you to run only the specified suite or test-case by appending.

### Real use case:
  - Open [this](![image](https://user-images.githubusercontent.com/8363610/66083828-89dc5a80-e543-11e9-8130-704cc721ead9.png)) image.
  - How would you run the `2nd` test inside of `countItems`?
  - Did you face some difficulties to find it?
  - Wouldn't it be better if you could run only the one you want?
  - If so, append the `.only` after the `.it` declaration the test case.
      - Done :)
```javascript
describe('Array', function() {
  describe('#indexOf()', function() {
    it.only('should return -1 unless present', function() {
      // ...
    });

    it('should return the index when present', function() {
      // ...
    });
  });
});
```
