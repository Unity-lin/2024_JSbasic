function sumA(arr) {
    let result = 0;
    for(let i = 0; i<arr.length; i++){
            result = result + (arr[i] * arr[i]);
    }
    return result;
}

console.log(sumA([1,2,3,4,5]));