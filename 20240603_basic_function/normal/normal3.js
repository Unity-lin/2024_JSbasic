function medianWord(arr){


    return
}







    function calculateMedian(arr) {
    arr.sort(function(a, b) {
    	return a - b;
    });
    
    if (arr.length % 2 !== 0) {	//arr.length의 길이가 짝인지 홀인지 판별하는 조건문
		// 배열의 길이를 /2한것을 반올림을 => 절삭. 하여 그 숫자에 있는 배열의 값을 리턴한다 => arr[2]
		// console.log(Math.floor(arr.length / 2))
		
		console.log(Math.floor(1.2))
        
		return arr[Math.floor(arr.length / 2)];
    } 

    else {
        
		var mid1 = arr[(arr.length / 2) - 1];
        var mid2 = arr[arr.length / 2];
        return (mid1 + mid2) / 2;
    
	}
	return aaa;
    }
    
    var arr = [5, 2, 1, 3, 4];
	calculateMedian(arr)
    // console.log(calculateMedian(arr)); 

	/**
	 * [5, 2, 1, 3, 4];
	 * [1, 2, 3, 4, 5];
	 */