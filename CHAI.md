# Welcome to the Chai's continuation of this tutorial
- You already have a good picture of what is the Chai assertion library.
- Now, let's go a little depper into it.

# Official Documentation Link
- https://www.chaijs.com/

# How can we install into our project?
- Throught the `npm install chai` command.

# What is CHAI?
> Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

# CHAI's Interfaces
- Chai has several interfaces that allow the developer to choose the most comfortable.

`Expect`
  ```javascript
  chai.should();
  
  foo.should.be.a('string');
  foo.should.equal('bar');
  foo.should.have.lengthOf(3);
  tea.should.have.property('flavors').with.lengthOf(3);
  ```
`Should`
  ```javascript
  var expect = chai.expect;
  
  expect(foo).to.be.a('string');
  expect(foo).to.equal('bar');
  expect(foo).to.have.lengthOf(3);
  expect(tea).to.have.property('flavors').with.lengthOf(3);
  ```
`Assert`
  ```javascript
  var assert = chai.assert;

  assert.typeOf(foo, 'string');
  assert.equal(foo, 'bar');
  assert.lengthOf(foo, 3)
  assert.property(tea, 'flavors');
  assert.lengthOf(tea.flavors, 3);
  ```

# Where can I found more examples like this?
- For `expect` and `should` APIs, check this [link](https://www.chaijs.com/api/bdd/).
- For `assert`, check this [link](https://www.chaijs.com/api/assert/).

# Recomended Codes

# Helpers
- [JavaScript unit testing tools Cheat Sheet](https://www.cheatography.com/apk/cheat-sheets/javascript-unit-testing-tools/pdf/)
- [The Ultimate Unit Testing Cheat-sheet](https://gist.github.com/yoavniran/1e3b0162e1545055429e#sinon-chai)
  