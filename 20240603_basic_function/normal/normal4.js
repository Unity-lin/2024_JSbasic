function b(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length - 1; i++){
        newArr.push(arr[i] + " " + arr[i+1])
        
    }
    return newArr
    
}
let result = b(['hello', 'world']);
console.log(result);