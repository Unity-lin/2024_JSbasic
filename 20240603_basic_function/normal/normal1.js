function averageArray(arr) {
    let result = 0;
    
    for(let i = 0; i < arr.length + 1; i++ ) {
        if(i < arr.length){
            result = result + arr[i];
        }
        else result = result / i;
        
    }
    
    return result;
}

console.log(averageArray([2,4,8,10]));