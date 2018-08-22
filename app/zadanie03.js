//Twój kod

const numbersStringArray = process.argv.slice(2);

const numbersArray = [];
numbersStringArray.forEach((val) => {
    numbersArray.push(Number(val));
    return numbersArray;
});

const sum = numbersArray.reduce((a, b) => a + b, 0);
console.log(sum);
