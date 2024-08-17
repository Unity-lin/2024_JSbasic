




function mostFrequentString(arr){
	const frequencyMap = {};

	let maxFrequency = 0;
	let mostFrequentString = '';

	for(let i = 0; i < arr.length; i++) {
		const current = arr[i];
		if(frequencyMap[current]){
			frequencyMap[current]++;
		}else{
			frequencyMap[current] = 1;
		}

		// 현재 문자열의 빈도가 최대 빈도보다 큰 것. //틀린것을 고칠것
		if(frequencyMap[current] > maxFrequency){
			maxFrequency = frequencyMap[current];
			mostFrequentString = current
		}

		return mostFrequentString;
	}
}

console.log(mostFrequentString(['a','b','a','c','c','c'])); //c가 나오게 할것