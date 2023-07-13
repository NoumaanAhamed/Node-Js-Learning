function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = { add, sub }; //!default - can only be used once as it overrides previous exports

// exports.addition = (a,b) => a+b
