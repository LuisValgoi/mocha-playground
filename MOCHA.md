# Welcome to the Mocha's continuation of this tutorial
- You already have a good picture of what is the Mocha framework.
- Now, let's go a little depper into it.

# Official Documentation Link
- https://mochajs.org/

# Helpers
- [Get started with Mocha testing](https://ricostacruz.com/til/get-started-with-mocha)

# How can we install into our project?
- Throught the `npm install mocha` command.

# What is MOCHA?
> Mocha is a feature-rich JavaScript test framework running on Node.js. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases

# Running Script
- Set up a test script in package.json:
```javascript
"scripts": {
  "test": "mocha"
}
```

# Code Example

```javascript
var expect = require('chai').expect

describe('my test suite', function() {
  it('fails majestically', function() {
    expect(3).to.eql(2)
  })
})
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

# Exclusive Tests
- It allows you to run only the specified suite or test-case by appending.
- Real use case:
    - Open [this](![image](https://user-images.githubusercontent.com/8363610/66083828-89dc5a80-e543-11e9-8130-704cc721ead9.png)) image
    - How would you run the `2nd` test inside of `countItems`?
    - Did you face some difficulties to find it?
    - Wouldn't it be better if you could run only the one you want?
    - If so, append the `.only` before the test case.
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
