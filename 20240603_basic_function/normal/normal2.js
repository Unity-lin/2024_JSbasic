// function firstWorld(array) {
//     return array.map(function(str) {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     });
// }
    
   
//     let a = ['hello', 'world'];
//     let result = firstWorld(a);


function capitalizeFirstLetter(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0) {
        let firstLetter = arr[i][0].toUpperCase();
        let restOfWord = arr[i].slice(1);
        result.push(firstLetter + restOfWord);
      } else {
        result.push(arr[i]);
      }
    }
    
    return result;
  }
  
  // 예시 사용
  let input = ['hello', 'world'];
  let output = capitalizeFirstLetter(input);
  console.log(output);