//Twój kod

const numbersStringArray = process.argv.slice(2);

const numbersArray = [];
numbersStringArray.forEach((val) => {
    numbersArray.push(Number(val));
    return numbersArray;
});

function printTextInTimeout(timeout,text) {
    setTimeout(() => {
        console.log(text);
    }, timeout);
}

numbersArray.forEach((val) => {
    printTextInTimeout(val*1000,val);
});
