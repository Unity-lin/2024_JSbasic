function countArray2(arr) {
    let jjak = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            jjak = jjak + 1;
        }
    }
    return console.log(jjak + "개");
    
}

countArray2([1,2,3,4,5,6]);