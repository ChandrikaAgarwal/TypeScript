const elementnum1 = document.getElementById('num1') as HTMLInputElement;
const elementnum2 = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;
const numResults:number[] = []; //array full of numbers
const textResults: string[] = []

//typealiases built in type operator in ts
type NumOrString = number | string;//number or string
type Result = { val: number; timestamp: Date }

//alternatives when working with object types are interfaces
interface ResultObj
{
    val: number;
    timestamp: Date;
}
function add(num1: NumOrString, num2: NumOrString) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {  //this is so-called type guard
        return num1 + num2
    } else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2
    }
    return +num1 + +num2 //forcing conversion to number if we get mixed type input
}

console.log(add(1, 6))

console.log("button: ",buttonElement);
function printResult(resultObj:Result) {
    console.log(resultObj.val);

}
buttonElement?.addEventListener('click', () => {
    const num1 = elementnum1?.value; //value always returns string
    const num2 = elementnum2?.value;
    const result = add(+num1, +num2)
    numResults.push(result as number)
    const stringRes = add(num1, num2)
    textResults.push(stringRes as string)
    console.log("textRes and num Res: ",textResults,numResults);
    
    console.log(stringRes);
    console.log(result);
    printResult({ val: result as number, timestamp:new Date})
    
})

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("it worked!!")
     },1000)
});

myPromise.then((result) => {
    console.log(result.split('w'));
})