function a(arr) {
    let result = [];
    let temp = 1;
    for (let i = 0; i < arr.length; i++) {
        temp = temp * arr[i];
        result.push(temp);
    }    
    return result;
  }

  console.log(a([1,2,3,4,5]));