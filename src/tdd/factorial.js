const factorial = (n) => {
  if (n < 0) {
    throw new RangeError("Argument cannot be negative");
  }

  if (n === 0) {
    return 1;
  }
  
  return n * factorial(n - 1);
};

export default factorial;
