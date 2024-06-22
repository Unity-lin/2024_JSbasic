
const allEvenNumbers = (arr) =>{
	for(let i =0; i <arr.length; i++){
		if (arr[i] % 2 !== 0) {
            return false;
        }
	}
	return true;
}


console.log('문제 10:', allEvenNumbers([2, 3, 6, 8]));