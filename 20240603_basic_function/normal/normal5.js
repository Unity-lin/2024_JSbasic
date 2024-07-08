function a(arr) {
    const set = new Set(arr);
    console.log("set ? ", set)
    const newArr = [...set];
    console.log("newArr ? ", newArr)
    let newArr2 = [];
    for(let i = 0; i<newArr.length; i++){
            newArr2.push(newArr[i] * newArr[i]);
    }
    return newArr2;
}

console.log(a([2, 1, 2, 3, 4, 4, 5]));

const arr1 = new Set([1,2,3])
const arr2 = [4,5,6]

const copydArr = [...arr1, ...arr2]

console.log(copydArr);