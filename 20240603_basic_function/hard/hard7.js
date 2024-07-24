
//1~10 중 소수인것
// 1은 소수에 포함이안된다
// 1과 자신의 수 말곤 나눠지지않는 수 

// function sosu(arr){

//     let result = [];

//     for(let i = 0; i < arr.length; i++){
//             if(arr[i] !== 1){
//             if(arr[i] === 2 || arr[i] === 3){
//                 console.log(arr[i]);
//                 result.push(arr[i]);
//             }
//             else if(arr[i] % 2 !== 0 && arr[i] % 3 !== 0){
//                 console.log(arr[i]);
//                 result.push(arr[i]);
//             }
            
        
//             }

//     }

//     return result;
// }

// console.log(sosu([ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]))
// ;


function isPrime(num){
    // 1은 소수가아니고 0보다 작을 수 없어.
    if(num <= 1) return false;

    if(num === 2) return true;

    if(num % 2 === 0) return false;

    // 3부터 숫자의 제곱근까지의 홀수로 나누어 떨어지는 것 소수가 아니다.
    for (let i=3; i<=Math.sqrt(num); i+=2){
        if(num % i === 0) return false;
    }

    return true;
}


function checkPrimes(arr){
    let result = [];

    for(let i=0; i<arr.length; i++){
        if(isPrime(arr[i])){
            result.push(arr[i]);
        };
    }

    return result;
}


let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(checkPrimes(testArray));

// => 숫자로 출력하도록 수정.


