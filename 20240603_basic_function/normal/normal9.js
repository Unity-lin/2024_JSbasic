function longest(arr) {
    let long = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > long.length) {
            long = arr[i];
        }
    }
    
    return long;
    }
    
   console.log(longest(['a', 'ab', 'abc', 'abcd']));