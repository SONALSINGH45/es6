function getsc(){
    return[1,4,5,6,7]
}
let [X,y,z,...args]=getsc();
console.log(args)//args print other remaining value

function getItems() {
    return [10, 20];
}
let [, , thirdItem = 0] = getItems();

console.log(thirdItem); //print default value 0


// function getItem() {
//     return null;
// }

// let [x = 1, j = 2] = getItem();//not a function ret 0\

//overcome above problem 
function getIte() {
    return null;
}

let [a = 10, b = 20] = getIte() || [];

console.log(a); // 10
console.log(b); // 20



///nested array destruct..
function getProfile() {
    return [
        'John',
        'Doe',
        ['Red', 'Green', 'Blue']
    ];
}
let [
    firstName,
    lastName,
    [
        color1,
        color2,
        color3
    ]
] = getProfile();

console.log(color1, color2, color3); // Red Green Blue


