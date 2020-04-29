// functions allow us to reuse code
// always a const
/*
let kettleBoiled;
const makeAHotDrink = () => {   // declaration 
    //arrow function
    //ES6 syntax
    if (kettleBoiled) {
        console.log("Pour");
        kettleBoiled = false;
    }
    else {
        console.log("Nope");
        kettleBoiled = true;
    }

};

makeAHotDrink();

//let num;
// let sum;
const threeOrFive = (num, sum) => {
for (i = 0; i < num; i++) {
if (i % 3 == 0 || i % 5 == 0) {
sum += i; // sum = sum + i
}
}
console.log(sum);
}

threeOrFive(500, 0);
threeOrFive(250, 0); */

/* const threeOrFive = (num) => {
    let sum = 0;
    for (i = 0; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}
let calcSum = threeOrFive(100);

console.log(calcSum);
*/



const acceptPin = (pinNumber, pinCount) => {
    let userPin = 1234;
    if ((pinNumber == userPin) && pinCount < 3) {
       return('pin accepted');
    } 
    else if ((pinNumber !== userPin) && pinCount < 3) {
        return('try again');
    }
    else {
        return('get off');
    }
}

const getBalance = (balance=100, userPin=1234) => {
    if (userPin == 1234) {
        return (`Your balance is: ${balance}`); 
    }
    else {
        return (`wrong details`);
    }
}

const dailyWithdrawal = (amountWithdrawn) => {
    let dailyLimit=250;
    let netWithdrawal;
    if (amountWithdrawn < dailyLimit) {
        netWithdrawal = dailyLimit - amountWithdrawn;
        return (`You have withdrawn ${amountWithdraw}, you have ${netWithdrawal} until your limit`);
    } else if (amountWithdrawn == dailyLimit) {
        return (`Your daily withdrawal limit of ${dailyLimit} has been reached`);
    }
    else {
        return (`Cannot exceed ${dailyLimit}`);
    }
}

const makeDeposit = (amountDeposited) => {
    depositLimit=250
    let netDeposit;
        if (amountDeposited < depositLimit) {
        netDeposit = depositLimit - amountDeposited;
        return (`You have deposited ${amountDeposited} and now you have ${netDeposit} until your limit`);
    }
    else if (amountDeposited == depositLimit) {
        return (`You have deposited ${depositLimit} and can make no further deposits`);
    }
    else {
        return (`Cannot exceed ${depositLimit}`);
    }
    
} 

const changePin = (oldPin, id) => {
    if (oldPin == 1234 && id == "Bubu") {
        return ('pin and id confirmed: insert new pin _ _ _ _')
    }
    else {
        return ('try again')
    }
}


let pinProcess = acceptPin(1234, 2);
console.log(pinProcess);

let checkBalance = getBalance(100, 1234);
console.log(checkBalance);

let withdrawalProcess = dailyWithdrawal(251);
console.log(withdrawalProcess);

let depositProcess = makeDeposit(251);
console.log(depositProcess);

let pinChangeProcess = changePin(1234, "Bubu");
console.log(pinChangeProcess);



/*
let num1; // don't need this
let num2; // dont need this
const mathExam = (num1, num2) => {
    let total = num1 + num2;
    let multiply = num1 * num2;

    if (total % 2 == 0) {
        console.log(total);
    }
    else {
        console.log(multiply);
    }
}

mathExam(30, 28);
*/


/*let max = 10;
let i = 0

while (i < max) {
    console.log('breathe');
    i++;
}

let flag = true;

while (flag) {

console.log('hello')
} */