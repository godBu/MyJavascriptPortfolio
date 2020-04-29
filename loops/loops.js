/* let bingoNumbers  = [0, 1, 2, 3];

console.table(bingoNumbers);

for (let i = 0; i < bingoNumbers.length; i++) {
    console.log(bingoNumbers[i]);
} 


let breakFastMenu = ["eggs", "toast", "beans"];

console.table(breakFastMenu);

for (let i = 0; i < breakFastMenu.length; i++) {
    breakFastMenu[i] += "s"; // breakFastMenu[i] = breakFastMenu[i] + "s" //
}
 */

 let string = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"

 let firstHi = string.indexOf("hi");
 let lastHi = string.lastIndexOf("hi");

 console.log(firstHi);
 console.log(lastHi);

for (let i = 0; i < string.length; i++) {
    if (string[i] == 'h' && string[i+1] == 'i') {
        console.log(`the word hi was found at index: ${i}`);

        break;
    
    }
}

for (i = string.length; i > 0; i--) {
    if (string[i] == 'i' && string[i-1] == 'h') {
        console.log(`the word hi was found at index: ${i-1}`);

        break
    }
}

let number = 1000;
let sum = 0; // the container that holds the sum of all the multiples of 3 and the multiples of 5 //
for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
       sum += i;
    }
}
console.log(sum);

let maxNumber = 1000;
let total = 0;
for (let i = 0; i < maxNumber; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        total = total + i; // total += i; //
    }
}
console.log(total);







 
 
    /*
 
 
 
 
 
 let menu = breakFastMenu[i];
    console.log(menu);
    let trimmedMenu = menu.trim();
    console.log(trimmedMenu);
}

console.log(breakFastMenu[0]);













/* let i = 0
for (;i < 10; i++) {
    console.log(i);
}

/* for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {

    }
} */