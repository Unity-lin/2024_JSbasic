function oneAdd(arr) {
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
            newArr.push(arr[i]);
    }
    return newArr;
}

console.log(oneAdd([1,2,3,4,5]));