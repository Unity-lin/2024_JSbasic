function b(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].length)
        
    }
    return newArr
    
}
let result = b(['hello', 'world']);
console.log(result);