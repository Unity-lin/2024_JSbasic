function doubleArray(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            newArr.push(arr[i]);
        }

    }
    return newArr;
    
}

console.log(doubleArray([1,2,3,4,5]));