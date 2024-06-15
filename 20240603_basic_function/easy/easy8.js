function a(arr) {
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
            newArr.push(arr[i]+1);
    }
    return newArr;
}

console.log(a([1,2,3,4,5]));