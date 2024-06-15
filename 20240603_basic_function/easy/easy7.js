function XArray(arr) {
    let result = 1;
    for(let i = 0; i < arr.length; i++ ) {
        result *= arr[i];
    }
    return result;
}

console.log(XArray([1,2,3,4,5]));