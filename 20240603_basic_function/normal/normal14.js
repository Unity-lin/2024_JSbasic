function a(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        
        result.push(Math.sqrt(arr[i])); //Math.sqrt() = 제곱근 구하는 함수 
    }
    
    return result;
    }
    
    console.log(a([1, 4, 9, 16, 25])); 