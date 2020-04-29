let breakFastMenu = ["eggs", "toast", "beans"]; // an array is a list of some sort, identifiable by the brackets, usually involves one data type
let bingoNumbers  = [0, 1, 3];
let spyNames = ['one', 'two', 'five', 'seven'];


console.log(breakFastMenu.length);

breakFastMenu.push("tea");

console.log(breakFastMenu);
console.table(breakFastMenu);
console.log(breakFastMenu[1])

// breakFastMenu.pop(); // removes last item
   breakFastMenu.shift(); //removes first item

// console.table(breakFastMenu);

// let lastItem = breakFastMenu.pop();

// console.log(lastItem);

breakFastMenu.splice(3, 1, "bacon");

console.log(breakFastMenu);

bingoNumbers.splice(2, 0, 2); // first one is starting index, second one the number of items to delete, last number is what we want to insert //

console.log(bingoNumbers);

//spyNames.splice(2, 0, 'three', 'four')
spyNames.splice(spyNames.indexOf('five'), 0, 'three', 'four')
//spyNames.splice(5, 0, 'six')
spyNames.splice(spyNames.indexOf('seven'), 0, 'six')


console.log(spyNames);
console.table(spyNames); 



let faveMovies = ['Avengers: End Game', 'Civil War', 'Doctor Strange']

faveMovies.push('Ant Man', 'Spider-Man'); // ... mean that you can add multiple items onto a function //

faveMovies.pop();

faveMovies.splice(3, 0, 'Hulk');

console.log(faveMovies);

let password = "hell0b00"

if (password.length < 8) {
    console.log("password short")
}
else {
    console.log(password)
}

let num1 = 5
let num2 = 4
let sum = num1 + num2 
let multi = num1 * num2

if (sum % 2 == 0) {
    console.log(sum)
}
else {
    console.log(multi)
}


let clockOn = true;

if (clockOn == true) {
    clockOn == false;
    console.log("Turn on")
}
else {
    clockOn == true;
    console.log("Turn off")
}