function sss(arr){
	for(let i =0; i< arr.length; i++){
		for(let j=0; j< arr.length -1; j++){
			if(arr[j] > arr[j+1]){
				let a = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = a
			}
		}
	}

	return arr;
}

console.log(sss(['banana', 'apple', 'cherry','zebra']));

console.log(('bacana'<'badple'))

// a, b ,c ,d 아스키코드 값. 