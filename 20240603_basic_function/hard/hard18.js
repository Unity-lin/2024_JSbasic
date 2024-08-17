function reverseStringsInArray(arr){
	const result = [];

	for(let i = 0; i < arr.length; i++) {
		let reversedStr = '';
		
		for (let j = arr[i].length -1 ; j >=0; j--){
			reversedStr += arr[i][j];
		}

		result.push(reversedStr);
	}

	return result;
}


const fruits = ['banana', 'apple', 'cherry'];
console.log(reverseStringsInArray(fruits));
