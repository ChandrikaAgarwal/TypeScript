"use strict";
const elementnum1 = document.getElementById('num1');
const elementnum2 = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = []; //array full of numbers
const textResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') { //this is so-called type guard
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    }
    return +num1 + +num2; //forcing conversion to number if we get mixed type input
}
console.log(add(1, 6));
console.log("button: ", buttonElement);
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', () => {
    const num1 = elementnum1 === null || elementnum1 === void 0 ? void 0 : elementnum1.value; //value always returns string
    const num2 = elementnum2 === null || elementnum2 === void 0 ? void 0 : elementnum2.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringRes = add(num1, num2);
    textResults.push(stringRes);
    console.log("textRes and num Res: ", textResults, numResults);
    console.log(stringRes);
    console.log(result);
    printResult({ val: result, timestamp: new Date });
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("it worked!!");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
