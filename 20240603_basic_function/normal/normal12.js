function a(arr) {
    let result = [];
    let result2 = [];
    let finalResult = [];
    for (let i = 0; i < arr.length; i++) {
    
      for(let j = arr.length; j >=0; j-- ){
          if(i === 0){
            result = result + arr[i][j]
          }
          else{
            result2 = result2 + arr[i][j]
          }
      }
  
    }
    finalResult = [...result].join("") + " " + [...result2].join("");

    
    return finalResult;
  }

  console.log(a(["abc", "def"]));
  

  // ['abc', 'def'] => ['cba', 'fed']
  // [[0,0],[0,1],[0,2]] => [[0,2], [0,1],[0,0] ]

  