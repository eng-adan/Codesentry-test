function addNumbers(a, b) {
  // Bug: Wrapping 'a' in String() forces concatenation instead of addition
  return String(a) + b;
}

// Example usage:
const sum = addNumbers(5, 3);
console.log(sum); // Output: "53" instead of 8!
