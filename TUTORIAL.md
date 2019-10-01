# Welcome to the continuation of this tutorial.
- Once you have a context of these technologies, let's continue w/ this repo and its specific things.

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
