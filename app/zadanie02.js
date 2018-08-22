//Twój kod

const quotesArray = ["Witam", "się", "z", "programem", "Node.js", "w konsoli", "i korzystam", "z funkcji czasu!"]

function printTextInTimeout(timeout,text) {
    setTimeout(() => {
        console.log(text);
    }, timeout);
}

quotesArray.forEach((val, index) => {
    printTextInTimeout(index*1000,val);
});
