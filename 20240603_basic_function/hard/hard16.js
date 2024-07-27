// 0 1 2 3 4 5 6 7 8 9 A B C D E F
// 16으로 먼저 나눠 나머지에 대한 값측정
// 몫이 0이될때까지 나눠 나머지에 대한 값측정

function sixteenChange(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        result.push(arr[i].toString(16));
    }

    return result;

}

console.log(sixteenChange([10, 15, 255]));