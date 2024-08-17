function a(arr) {
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
            newArr.push(arr[i] * arr[i]);
    }
    return newArr;
}

console.log(a([1,2,3,4,5]));

