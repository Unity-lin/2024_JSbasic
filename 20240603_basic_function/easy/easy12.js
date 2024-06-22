const oneArray = (arr) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
            return true;
        }
    }
    return false;
}
 
console.log(oneArray([2,4,6,7])); //true
console.log(oneArray([2,4,6,8])); //false