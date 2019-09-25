function divide(a, b) {
  if(b === 0) {
    throw new Error('b cannot be zero');
  }
  return a/b;
}

module.exports = divide;