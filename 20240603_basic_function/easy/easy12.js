function oneArray(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            newArr.push(arr[i]);
        }
        else newArr.push("");
        
    }
    return newArr;
    
}

console.log(oneArray([1,2,5,7]));