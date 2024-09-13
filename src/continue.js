const numbers = [];
let result = 0;

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    result += numbers[i];
}

console.log(result);
