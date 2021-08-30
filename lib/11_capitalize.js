const capitalize = (string) => {
  const first = string[0].toUpperCase();
  const rest = string.substring(1).toLowerCase();
  return `${first}${rest}`;
};

const sentence = 'hellO wOrlD from BATch 696!'
console.log(capitalize(sentence));
