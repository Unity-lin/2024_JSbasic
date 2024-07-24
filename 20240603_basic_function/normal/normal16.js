function a(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
         if(arr[i] < 0){
            result.push(arr[i] * -1)
          }
          else{
            result.push(arr[i]);
          }
  
    }


    
    return result;
  }

  console.log(a([-1,-2,3,-4,5]));