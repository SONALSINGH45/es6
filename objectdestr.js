let person = {
    firstName: 'John',
    lastName: 'Doe'
};
let { firstName, lastName } = person;

console.log(firstName); // 'John'
console.log(lastName); // 'Doe'




///set default value
let persons = {
    fName: 'John',
    lName: 'Doe',
    currentAge: 28
};

let { fName, lName, middleName = '', currentAge: age = 18 } = persons;

console.log(middleName); // ''
console.log(age); // 28

/// if mid name exist
let pe= {
    fiName: 'John',
    laName: 'Doe',
    miName: 'C.',
    currAge: 28
};

let { fiName,  laName, miName = '', currAge: ag = 18 } = pe;

console.log(miName); // 'C.'
console.log(ag); // 28