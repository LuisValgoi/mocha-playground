# Welcome to the `mocha-learning` repo
This repo was created to learn a little bit more about Mocha and Chai.

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

# Why using `mocha` and `chai` ?
- When we combine `mocha` and `chai`, we have:
> A powerfull and quick unit testing framework using node w/ an assertion library very easy to understand and code.

```javascript

```

# What to Do First?
- First, check the `package.json` file.
- You will see on the `scripts` property, all the *available commands*.

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
    - `npm install --save-dev chai`.
- Once executed, it will appear into the `devDependencies` property.
- Once is there, you are able to use it in the `scripts` tag as a *command*.

# What `|| true` @ `test` property means?
- Without it, it will generate a `log file`. [Check Here](https://user-images.githubusercontent.com/8363610/65988774-dac65300-e45e-11e9-887a-6af4ca1f0c63.png).
- With it, it will sufix it will *not* generate a `log file`. [Check Here](![image](https://user-images.githubusercontent.com/8363610/65989123-7657c380-e45f-11e9-9bf8-621024708bc1.png)).
