/* console.log('HELLO THERE.'.toLowerCase());
console.log("Hello".toUpperCase());
console.log("Hello".length); 
// (), [], {}
console.log("Did I save?")

console.log(Math.random()*6); 
console.log(Math.floor(Math.random()*6)); // 0 - 5
console.log(Math.ceil(Math.random()*6)); // 1 - 6

// declaration & definition of variables
let username; // declaration
console.log(username)
let greeting = "Hello, World." // declare and define
let name = "Jacob Reilly-Cooper" // string
let lightOn = true
// let age = 45 // number
// age = 46
let isThatTrue = true // boolean

let age; // declaration
age = 45; // definition


// keep your variables the same type throughout

console.log(greeting);
console.log(name);
console.log(age);
console.log(isThatTrue);

// shift option down / up

let doorOpen = true
let doorUnlocked = true
let doorHasCatFlap = true


if (doorOpen == false && doorHasCatFlap == true) {
  console.log("Use the cat flap, you lazy...")
}
else if (doorOpen == false && doorHasCatFlap == false) {
  console.log("Ring the bell OR meow.")
}
else if (doorOpen == true && doorHasCatFlap == false) {
  console.log("Use the door.")
}
else if (doorOpen == true && doorHasCatFlap == true) {
  console.log("Silence. Shock. Awe. Amazement.")
}
else { // no conditions... it just captures anything odd.
  console.log("Buy a door and a cat flap.")
}





// if (doorOpen == true) {
//   doorOpen = false
//   console.log("Door is now shut.")
// }
// else {
//   doorOpen = true
//   console.log("Door is now open.")
// }


if (lightOn == true) {
  lightOn = false
  console.log("The light is on.")
}
else { // means false in this case
  lightOn = true
  console.log("The light is off.")
}

if (lightOn == true) {
  lightOn = false
  console.log("The light is on.")
}
else { // means false in this case
  lightOn = true
  console.log("The light is off.")
}


// string
// console.log(10, 5); // number
// console.log(true); // boolean




/* 
bracket pair colorizer

live server
live share
c#
** optional** prettier / beautify

*/
/**
 * dot.notation
 * object.property
 * console.log < log exists inside of console
 */

/* let string = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"

for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
*/
/*
let str = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";

for (let i = 0; i < str.length; i++) {

  console.log(str.charAt(i));

}

let name = "";

while(true){
  name = prompt("Enter name: ")

  if (name != "") {
    break;
  }
}

while(true){
let userInput = prompt('Enter your guess: ');
let randNum = Math.floor(Math.random()*6)+1;

console.log(randNum);


  if (userInput == randNum) {
    alert('fuck yes')
    break;
  }
  else {
    alert('fuck off')
  }
}

console.log('fin');

alert('Did it work?'); 

document.getElementById("heading").style.color = "purple"; 
document.getElementById("heading").style.backgroundColor = "pink"; */

const myHeading = document.getElementById("heading");
const button = document.getElementById("button");
const input = document.getElementById("input");
const paragraphs = document.getElementsByTagName("p");

paragraphs[0].style.color = "red";

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "magenta";
} 

myHeading.addEventListener("click", () => {
  myHeading.style.color = "green";
})

button.addEventListener("click", () => {
  //myHeading.style.color = "yellow"
  myHeading.style.color = input.value;
})

/*let i = 0;
while (i < paragraphs.length) {
  paragraphs[i].style.color = "green";
  i++;
} */