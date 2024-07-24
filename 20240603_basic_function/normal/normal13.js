function a(arr, b) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
         if(arr[i] > b){
            result.push(arr[i])
          }
  
    }


    
    return result;
  }

  console.log(a([1,2,3,4,5],3));