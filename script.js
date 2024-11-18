//Task 2
const numbers = [1,2,3,4,5,6,7,8];
function calculateSumAndAverage(){
    const sum = numbers.reduce((accumulator,currentValue)=>{
        return accumulator+currentValue;
    },0);
    const average = sum / numbers.length;
    console.log('sum is ',sum);
    console.log('average is ',average);
}
console.log('The result of Task2');
calculateSumAndAverage(); // to run this run this command "node script.js"

//Task 3
const arrayOfStrings = ["a","b","a","c","d","d"];
function removeDuplicates (){
    const filteredArray = arrayOfStrings.reduce((accumulator,currentValue)=>{
         accumulator.add(currentValue);
         return accumulator;
    },new Set());
    console.log('arrayOsStrings without duplicates ',[...filteredArray]);
}
console.log('The result of Task3');
removeDuplicates();
// to run this run this command "node script.js"