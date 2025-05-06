# Reproduction repo for Rspack use shorthand + options bug

# Steps to reproduce

1. Clone the repo
2. Run `npm install`
3. Run `npm run build`
4. Observe the error message

Checkout comment in `./rspack.config.js` for more details on the issue.

# Expected behavior

There should be a typescript error when using shorthand + options in the `rspack.config.js` file.

# Actual behavior

There is no typescript error when using shorthand + options in the `rspack.config.js` file.
