function removeDuplicatesAndSort(numbers){
	const uniqueSet = new Set(numbers);
	const uniqueArray = Array.from(uniqueSet); //Array.from
	console.log(uniqueArray);
	uniqueArray.sort((a, b)=> a - b);
	
	return uniqueArray;
}

console.log(removeDuplicatesAndSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));