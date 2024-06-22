function doubleArray2(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            newArr.push(arr[i]);
        }
        else console.log("all no double !");
    }
    return newArr;
    
}

console.log(doubleArray2([2,4,6,8,11]));