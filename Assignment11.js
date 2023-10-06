//1. Write a JavaScript program to take an array as input from the user and calculate the sum of numbers in odd places and the sum of numbers at even places.
const readline = require('readline-sync');
const userInput = readline.question('Enter numbers separated by spaces: ');
const numbers = userInput.split(' ').map(Number);
const oddarr=[];
const evenarr=[];
let i=0;
for(i;i<numbers.length;i++)
{
    if(i%2==0)
    {
        oddarr.push(numbers[i]);
    }
    else
    {
        evenarr.push(numbers[i])
    }
}
let sum1=0;
for(i=0;i<evenarr.length;i++)
{
    sum1+=evenarr[i];
}
let sum2=0;
for(i=0;i<oddarr.length;i++)
{
    sum2+=oddarr[i]
}
//a) Print the difference between the two sums
console.log("Difference: ",sum2-sum1)
//b) Print the number of elements in odd places
console.log("Odd Elements: ",oddarr.length)
//c) Print the number of elements in even places
console.log("Even Elements: ",evenarr.length)
//d) Print the average of all elements in the array
const totalsum = numbers.reduce((accumulator, currentValue) => 
{
    return accumulator + currentValue;
}, 0);
console.log("Average: ",totalsum/numbers.length)
//e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places
function gcd(sum1, sum2) {
    if (sum2 === 0) {
        return sum1;
    } else {
        return gcd(sum2, sum1 % sum2);
    }
}
const result = gcd(sum1, sum2);
console.log("Gcd:",result)

//2. Write a JavaScript program to take 2 arrays from the user and check if the number 4 exists in any of the arrays, or both of the arrays.
const input1 = readline.question('Enter Arr 1: ');
const arr1 = input1.split(' ').map(Number);
const input2 = readline.question('Enter Arr 2: ');
const arr2 = input2.split(' ').map(Number);
let out1 = arr1.includes(4) ? 1 : 0;
let out2 = arr2.includes(4) ? 1 : 0;
if (out1 === 0 && out2 === 0) {
    console.log("No array has 4 in it");
} else if (out1 === 1 && out2 === 0) {
    console.log("4 is present in array 1");
} else if (out1 === 0 && out2 === 1) {
    console.log("4 is present in array 2");
} else if (out1 === 1 && out2 === 1) {
    console.log("4 is present in both the arrays");
}

//3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain array.
function flattenArray(arr) {
    const flattened = [];
    function flattenHelper(inputArr)
     {
        for (const item of inputArr) 
        {
            if (Array.isArray(item)) 
            {
                flattenHelper(item);
            } else 
            {
                flattened.push(item);
            }
        }
    }
    flattenHelper(arr);
    return flattened;
}
const nestedArray = [1, 2, [3, 4, [5]]];
const flattenedArray = flattenArray(nestedArray);
console.log('Flattened Array:', flattenedArray);

//Write a JavaScript program to take an array as input from the user and:
const input = readline.question('Enter Array: ');
const duplicatearr=[];
//a) Store all duplicate elements in a separate array
//b) Remove the duplicate elements from the original array
function findDuplicatesAndRemove(arr) {
    const duplicates = [];
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.includes(arr[i])) {
            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        } else {
            uniqueArray.push(arr[i]);
        }
    }

    return { duplicates, uniqueArray };
}
const inputArray = input.split(' ').map(Number);
const { duplicates, uniqueArray } = findDuplicatesAndRemove(inputArray);
console.log('Duplicate Elements =', duplicates);
console.log('Array without duplicate elements =', uniqueArray);
