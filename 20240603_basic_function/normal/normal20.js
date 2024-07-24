function b(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].toLowerCase())
        
    }
    return newArr
    
}
let result = b(['HELLO', 'WORLD']);
console.log(result);