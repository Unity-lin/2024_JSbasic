//뮨제 1

const arr =  [1, 2, 3];
const arr1 = [...arr, 4];
console.log(arr1);

//문제 2 

const arr2 = ['a', 'b'];
const arr3 = ['c', 'd'];
console.log([...arr2, ...arr3])

//문제 3

const arr4 = [1, 2, 3];
console.log([...arr4, 2.5].sort())

//문제 4

function multiply(x, y, z) {
    return x * y * z;
}

const nums = [2, 3, 4];
const result = multiply(...nums);
console.log(result);

//문제 5

const person = { name: 'John', age: 25 };
const copyperson = {...person, age: 30};
console.log(copyperson)

//문제 6

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = {...obj1, ...obj2, c:3};
console.log(mergedObj);

//이해불가

//문제 7

const defaultSettings = { theme: 'light', notifications: true };
const userSettings = { theme: 'dark' };

const finalSettings = {...defaultSettings, ...userSettings};
console.log(finalSettings);

//문제 8

const arr5 = [1, 2, 2, 3, 4, 4, 5];
const arr6 = [...new Set(arr5)]
console.log(arr6);

//문제  9

const str = 'hello'
const arr7 = [...str];
console.log(arr7[0]);

//문제 10 


const numbers = [5, 10, 15, 20, 25];
const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log('최대값 : ' + max + ' ' + '최소값 : ' + min);


