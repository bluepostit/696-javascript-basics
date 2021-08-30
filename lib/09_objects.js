const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

console.log(typeof student);
// => "object"

console.log(student);


// C-reate
student.age = 24;
student['hometown'] = 'Marseilles';
console.log(student);

// R-ead
console.log(`First name: ${student.firstName}`);
console.log(`Last name: ${student['lastName']}`);

// U-pdate
student.age += 1;
console.log(student);

// D-elete
delete student.hometown;
console.log(student);
