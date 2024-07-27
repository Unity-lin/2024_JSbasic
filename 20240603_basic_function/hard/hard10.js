function objWord(arr) {
    let obj = [];
    let count = 0;
    let count1 = 0;
    let count2 = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "a") {
            count++;
        } else if(arr[i] === "b"){
           count1++;
        }
        else{
            count2++;
        }
    }

    obj.push(count);
    obj.push(count1);
    obj.push(count2);
    
    return obj;
    }
    
    let arr =  ['a', 'b', 'a', 'c', 'b', 'a'];
    console.log(objWord(arr)); 