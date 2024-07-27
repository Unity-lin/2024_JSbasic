function tripleArray(arr, num) {
    let result = [];
    
    for(let i = 0; i < arr.length; i++ ) {
            result.push(Math.pow(arr[i], num))
    }
    
    return result;
}

console.log(tripleArray([1,2,3,4,5], 3));