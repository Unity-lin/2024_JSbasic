function X2AverageArray(arr) {
    let result = 0;
    
    for(let i = 0; i < arr.length + 1; i++ ) {
        if(i < arr.length){
            result = result + (2 * arr[i]);
        }
        else result = result / i;
        
    }
    
    return result;
}

console.log(X2AverageArray([2,4,8,10]));