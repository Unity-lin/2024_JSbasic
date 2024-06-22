const upperEnglish = (arr) => {
    for(let i = 0 ; i < arr.length; i++ ){
        if(arr[i] !== arr[i].toUpperCase()){
            return false;
        }
    }

    return true;
}

console.log(upperEnglish(["HELLO", "world"]));