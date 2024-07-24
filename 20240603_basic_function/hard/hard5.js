function a(arr) {
    let newArr = [];
    let temp = 0;
    for(let i = 0; i<arr.length; i++){
        temp = arr[i] * arr[i];
        if(temp % 2 === 0){
            newArr.push(temp);
        }
    }
    return newArr;
}

function squaredEvenNumbers(arr){
    return arr.map(num=>num * num).filter(num => num%2 === 0)   // 루프를 두번 돈다.
}


// 큰 배열 생성
const testArray = Array.from({length: 1000000}, (_, i) => i + 1);

// 함수 a 성능 테스트
console.time('Function a');
a(testArray);
console.timeEnd('Function a');

// 함수 squaredEvenNumbers 성능 테스트
console.time('Function squaredEvenNumbers');
squaredEvenNumbers(testArray);
console.timeEnd('Function squaredEvenNumbers');

//왜 함수 a 가 더 빠를까??? 함수형 + 절차형을 섞어서 가능..