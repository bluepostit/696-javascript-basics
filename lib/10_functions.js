// Old-school
function square(x) {
  return x * x;
}

console.log(square(3));

// Newer way: Arrow functions

// Regular form
const cube = (x) => {
  return x * x * x;
}

console.log(cube(3));

// Short form: only for single-line functions!
// f(x) = 2x + 37
const double = x => x * 2;
console.log(double(3));
