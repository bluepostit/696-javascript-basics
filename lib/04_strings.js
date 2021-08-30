const greeting = 'hello there';
const welcome = "Welcome to JavaScript";

// String length
console.log(greeting.length);

// Character access
console.log(welcome[0]);
console.log(welcome[3]);

// Substring
console.log(welcome.substring(11));
console.log(welcome.substring(11, 15));

// Changing case
console.log(greeting.toUpperCase());
console.log(welcome.toLowerCase());

// Split
const sentence = 'The rain in Spain stays mainly on the plane';
const words = sentence.split(' ');
console.log(words.length);

// Interpolation

// Ruby way:
// "The answer is: #{6 * 7}"
console.log(`The answer is ${6 * 7}`);
