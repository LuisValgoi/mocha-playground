# Welcome to the `mocha-learning`
This repository was created to learn a little bit more about Mocha and Chai.

# Summary
- [What is mocha?](https://github.com/LuisValgoi/mocha-learning#what-is-mocha)
- [What is chai?](https://github.com/LuisValgoi/mocha-learning#what-is-chai)
- [What is TDD?](https://github.com/LuisValgoi/mocha-learning#what-is-tdd)
- [What is BDD?](https://github.com/LuisValgoi/mocha-learning#what-is-bdd)
- [Why using Mocha + Chai?](https://github.com/LuisValgoi/mocha-learning#why-using-mocha-+-chai-)
- [Extra](https://github.com/LuisValgoi/mocha-learning#extra)

# What is `mocha`?
- JavaScript test runner framework running on Node.js.
- Framework which provides the `describe()`, `it()` and etc.

# What is `chai`?
- BDD / TDD assertion library for node that can be paired with any javascript testing framework.
- lib that provides `expect()`, `should()`, `expect()` methods to better assertion.

# What is `TDD`?
- Stands for: Test Driven Development.
- Different than "Write all your tests". It's a cycle.
- Rules (![#f03c15](https://placehold.it/15/f03c15/000000?text=+), ![#c5f015](https://placehold.it/15/c5f015/000000?text=+), ![#1589F0](https://placehold.it/15/1589F0/000000?text=+)): 
    1. ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) First you test you UC.
    2. ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Second you implement you UC.
    3. ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Then refactor your code. 
    4. Start all over until its done.

# What is `BDD`?
- Stands for: Behavior Driven Development.
- BDD comes from TDD.
- TDD was to hard to explain.
- BDD simpler way to write tests.
  - _"Don't write a test, describe a behavior"_
- Example of BDD: `A method, should receive an argument and returs its metadata`.

# Why using `mocha` + `chai` ?
> When we combine them, we have a powerfull and quick unit testing framework on top of node w/ an assertion library which is very easy to understand and to code.

only `mocha`:
```javascript
var assert = require('assert');
describe("mutiply()", () ==> {
  it("should return 50 for 10 * 5", () ==> {
    var result = mutiply(10, 5);
    assert.equal(result, 50);
  });
});
```

`mocha` + `chai`:
```javascript
var assert = require('assert');
var expect = require('chai').expect; // new
describe("mutiply()", () ==> {
  it("should return 50 for 10 * 5", () ==> {
    var result = mutiply(10, 5);
    expect(result).to.be.equal(50); // new
  });
});
```
# Extra
- If you want to follow this project's tutorial, [click here](https://github.com/LuisValgoi/mocha-learning/blob/master/TUTORIAL.md).
- If you want to learn more about `mocha`, [click here](https://github.com/LuisValgoi/mocha-learning/blob/master/MOCHA.md).
- If you want to learn more about `chai`, [click here](https://github.com/LuisValgoi/mocha-learning/blob/master/CHAI.md).