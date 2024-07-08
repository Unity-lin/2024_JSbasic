function b(arr) {
    for(let i = 0; i < arr.length; i++){ //ok
        for(let j = 0; j < arr.length - 1; j++){    // ok
            if(arr[j].length > arr[j+1].length){
                let a = arr[j]; // 임시변수
                arr[j] = arr[j+1];  
                arr[j+1] = a;
            }
        }    
    }
    return arr
}
// for문의 역활.. 
console.log(b(['abc', 'ab','a','abcd','abcde']));


const sortByLength = (arr) => {
    return arr.sort((a, b) => a.length - b.length);
};


console.log(sortByLength(['abc', 'ab','a','abcd','abcde']));