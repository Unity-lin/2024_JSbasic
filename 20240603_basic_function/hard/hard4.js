// 1 : 01 , 2 : 10, 3 : 11, 4 : 100, 5 : 101


// 문제 4: 2진수 변환 함수
function convertToBinary(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        result.push(numbers[i].toString(2));	// 숫자를 바로 하면 toString 안된다. 왜???
    }
    return result;
}

console.log(convertToBinary([1,2,3,4,5]))