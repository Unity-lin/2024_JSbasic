
//다음 수가 연속적이지않으면 끊어야한다
//다음수가 +1된 값이 아니면 끊고 그때까지의 카운트를 적고 카운트를 초기화시킨다
//다음수가 +1이된다면 카운트를 센다

function aLength(arr) {
    let result = [];
    let count = 1;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 === arr[i + 1]) {
            count++;
        } else {
            result.push(count);
            count = 1;
        }
    }
    
    return result;
    }
    
    let arr = [1, 2, 3, 5, 6, 7, 9];
    console.log(aLength(arr)); 