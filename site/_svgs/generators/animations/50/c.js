module.exports = require('./_make')({
  R: 10,
  delayFnGenerator: ({ N }) => ({ x, y, r, c }) => 1 - (r + c) / (2 * (N - 1)),
});
