// function a(arr) {
//     let result = [];
//     let finalResult = [];

//     for (let i = 0; i < arr.length; i++) {
//         result = result + arr[i]
        
//     }
//     const uniqueSet = new Set(result)
//     let a = [...uniqueSet];
//     for (let j = 0; j < a.length; j++) {
//         finalResult = finalResult + a[j]
        
//     }
//     return finalResult;
//   }

//   console.log(a(["abc", "bcd", "cde"]));
  

// function combineAndRemoveDuplicates(strArray){
//     let result = "";

//     for (let i = 0; i < strArray.length; i++) { // 배열의 순회
        
//         let currentString = strArray[i];

//         for (let j = 0; j < strArray.length; j++){  //문자열 순회
//             let currentChar = currentString[j];

//             if(result.indexOf(currentChar) === -1){
//                 result += currentChar;
//             }
//         }
//     }

//     return result;
// }

// console.log(combineAndRemoveDuplicates(["cde", "bcd", "abc"]));
  
// console.log("abc".indexOf("c"));

const combineAndRemoveDuplicates = (strArray) => Array.from(
    new Set(
        strArray.join('').split('')
    )
).join('');


console.log(combineAndRemoveDuplicates(["cde", "bcd", "abc"]));