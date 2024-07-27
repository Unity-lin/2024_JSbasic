function a(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length % 2 === 0){
            result.push(arr[i].length);
        }
    }
    return result;
}

let arr =  ['a', 'ab', 'abc', 'abcd'];
console.log(a(arr)); 