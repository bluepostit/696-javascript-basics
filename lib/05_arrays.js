const drinks = ['long island iced tea', '404', 'black russian', 'pina colada'];
console.log(drinks);

// C-reate
drinks.push('negroni');
console.log(drinks);

// R-ead
console.log(drinks[1]);
// Doesn't work as in Ruby:
// console.log(drinks[-1]);

// U-pdate
drinks[3] = 'martini';
console.log(drinks);

// D-elete
drinks.splice(0, 1);
console.log(drinks);


// Iteration
drinks.forEach((drink) => {
  console.log(`🍸 ${drink}`);
});
