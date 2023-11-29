export function add(a, b) {
  // Only accept numbers
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Only numbers are accepted");
  }
  return a + b;
}
