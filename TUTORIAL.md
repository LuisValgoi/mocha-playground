# Welcome
- Once you have a context of these technologies, let's continue w/ this repo and its specific things.

# What to Do First?
- First, check the `package.json` file.
- You will see on the `scripts` property, all the *available commands*.

# Running Scripts
- Set up an command script in package.json:
```javascript
"scripts": {
    "test": "mocha ./test/**/*Test.js || true",
    "coverageText": "nyc mocha ./test/**/*Test.js",
    "coverageHTML": "nyc --reporter=html mocha ./test/**/*Test.js"
}
```

# Available Commands
1. `npm run test`
    - Runs all your tests.
2. `npm run coverage`
    - Runs the coverage for your tests w/ output in the `cmd`.
2. `npm run coverageHTML`
    - Runs the coverage for your tests w/ output in the `./coverage` folder w/ a `HTML` file.


# How did you add the `test` command?
- Manually. 
- For installing `mocha` and `chai`, use:
    - `npm install --save-dev mocha`
    - `npm install --save-dev chai`
- Once executed, it will appear into the `devDependencies` property.
- Once is there, you are able to use it in the `scripts` tag as a *command*.

# What `|| true` @ `test` property means?
- Without it, it will generate a `log file`. [Check Here](https://user-images.githubusercontent.com/8363610/65988774-dac65300-e45e-11e9-887a-6af4ca1f0c63.png).
- With it, it will sufix it will *not* generate a `log file`. [Check Here](![image](https://user-images.githubusercontent.com/8363610/65989123-7657c380-e45f-11e9-9bf8-621024708bc1.png)).

# Test Doubles
- Normally, we use these fake objects through libraries, such as [Sinon](https://sinonjs.org/).
- There are different types of test doubles:
    - Fake
    - Stubs
    - Spies
    - Mocks

`Fake Objects`
- have working implementations closer to a real-world implementation.
```javascript
describe('UsersController getAll()', () => {
  it('should return a list of users', () => {
    // asert
    let expectedDatabaseResponse = [{ name: 'John Doe' }];
    let fakeDatabase = {
      findAll() {
        return expectedDatabaseResponse;
      }
    }
    
    // act
    let response = new UsersController(fakeDatabase).findAll();
    
    //assert
    expect(response).to.be.eql(expectedDatabaseResponse);
  });
});
```

`Stubs`
- provide canned answers to calls made during the test.
```javascript
describe('UsersController getAll()', () => {
  it('should return a list of users', () => {
    // arrange
    let expectedDatabaseResponse = [{ name: 'John Doe' }];
    let findAll = sinon.stub(Database, 'findAll').returns(expectedDatabaseResponse);

    // act
    let response = new UsersController(Database).getAll();

    // assert
    sinon.assert.calledWith(findAll, 'users');
    expect(response).to.be.eql(expectedDatabaseResponse);
    
    // restore
    findAll.restore();
  });
});
```

`Spies`
- are stubs that also record some information based on how they were called.
```javascript
describe('UsersController getAll()', () => {
  it('should findAll users from database with correct parameters', () => {
    // arrange
    let findAll = sinon.spy(Database, 'findAll');
    
    // act
    new UsersController(Database).getAll();
    
    // assert
    sinon.assert.calledWith(findAll, 'users');
    
    // restore
    findAll.restore();
  });
});
```

`Mocks`
- has a set of expectations about calls that are made. 
- if these expectations are not met, the test fails (exceptions).
```javascript
describe('UsersController getAll()', () => {
  it('should call database with correct arguments', () => {
    // arrange
    let databaseMock = sinon.mock(Database);

    // pre-assert
    databaseMock.expects('findAll').once().withArgs('users');

    // act
    new UsersController(Database).getAll();

    // expectations
    databaseMock.verify();

    // restore
    databaseMock.restore();
  });
})
```