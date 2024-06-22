function threeUpArray(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 3){
            newArr.push(arr[i]);
        }

    }
    return newArr;
    
}

console.log(threeUpArray([-3,1,2,3,3.5,4,5]));