"use strict";

const numbers = [];
let operationsAvoided = 0;

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {

        operationsAvoided += (numbers.length - i - 1);
        console.log("Nombre superieur à 50")
        break;

    }
    console.log(numbers[i]);
}

console.log("Nombres d'opération évitées :" + operationsAvoided);