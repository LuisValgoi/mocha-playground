# Welcome
- You already have a good picture of what is the Chai assertion library.
- Now, let's go a little depper into it.

# Official Documentation Link
- The official documentation link: https://www.chaijs.com/

# Helpers
- [JavaScript unit testing tools Cheat Sheet](https://www.cheatography.com/apk/cheat-sheets/javascript-unit-testing-tools/pdf/)
- [The Ultimate Unit Testing Cheat-sheet](https://gist.github.com/yoavniran/1e3b0162e1545055429e#sinon-chai)
- [Language Chains from Aaron](http://aaronsofaly.github.io/chai-docs/api/bdd/)

# Installing
- We can install into our projecto through: `npm install chai`.

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

- It does not work @ IE9;
- It works w/ `Object.prototype` under the scenes;
- May there are some scenarios where should will not work.

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

# Code Example
`.deep`
```javascript
expect({a: 1}).to.deep.equal({a: 1});
expect({a: 1}).to.be.eql({a: 1});
expect([{a: 1}]).to.deep.include({a: 1});
expect([{a: 1}]).to.have.deep.members([{a: 1}]);
expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
```

`.nested`
```javascript
expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
```

`.own`
```javascritpt
expect({a: 1}).to.have.own.property('a');
expect({a: 1}).to.own.include({a: 1});
```

`.ordered || .any || .all`
```javascript
expect([1, 2]).to.have.ordered.members([1, 2]);
expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
```

`.a(type[, msg])`
```javascript
expect('foo').to.be.a('string');
expect({a: 1}).to.be.an('object');
expect(null).to.be.a('null');
expect(undefined).to.be.an('undefined');
expect(new Error).to.be.an('error');
expect(Promise.resolve()).to.be.a('promise');
expect(new Float32Array).to.be.a('float32array');
expect(Symbol()).to.be.a('symbol');
```

`.include`
```javascript
expect([1, 2, 3]).to.include(2);
expect('foobar').to.include('foo');
expect(new Set([1, 2])).to.include(2);
expect([1, 2, 3]).to.be.an('array').that.includes(2);
```

`.ok || .equal || .true || .false || .null || .undefined || .NaN`
```javascript
expect(1).to.be.ok;
expect(1).to.equal(1);
expect(true).to.be.true;
expect(false).to.be.false;
expect(null).to.be.null;
expect(undefined).to.be.undefined;
expect(NaN).to.be.NaN;
```

`.above || .below || .most || .empty || .length`
```javascript
expect(10).to.be.above(5);
expect(5).to.be.below(10);
expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
expect([]).to.be.empty;
expect([1, 2, 3]).to.have.lengthOf(3); 
```

`.match || .string || .oneOf || .frozen`
```javascript
expect('foobar').to.match(/^foo/);
expect('foobar').to.have.string('bar');
expect('a').to.be.oneOf(['a', 'b', 'c']);
expect(Object.freeze({})).to.be.frozen;
```