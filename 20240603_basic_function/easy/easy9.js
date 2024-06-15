function b(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= 4){
            newArr.push(arr[i])
        }
        
        
    }
    return newArr
    
}
console.log(b(['a', 'ab','abc','abcd','abcde']));