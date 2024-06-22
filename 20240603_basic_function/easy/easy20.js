function countArray(arr) {
    let hall = 0;
    let jjak = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            jjak = jjak + 1;
        }
        else hall = hall + 1;
    }
    return console.log(hall + "," + jjak);
    
}

countArray([1,2,3,4,5,7,8,9,34]);