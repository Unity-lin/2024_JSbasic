function b(arr) {
    for(let i = 0; i < arr.length; i++){ 
        for(let j = 0; j < arr.length - 1; j++){    
            if(arr[j].length > arr[j+1].length){
                let a = arr[j+1]; 
                arr[j+1] = arr[j];  
                arr[j] = a;
            }
        }    
    }
    return arr
}


console.log(b([1,2,3,4,5]));