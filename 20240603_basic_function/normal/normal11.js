function countArray(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            newArr.push(arr[i]);
        }

    }
    return newArr;
    
}

console.log(countArray([1,2,3,4,5,7,8,9,34]));