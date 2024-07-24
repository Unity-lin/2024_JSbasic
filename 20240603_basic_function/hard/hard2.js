//주어진 배열에 모든 객체 특정 키 값을 더하는 함수를 작성하시오 
//예시데이터 : [{a : 1}, {a : 2}, {a : 3}] , "a"

/*
[{a: 1}, {a: 2}, {a: 3}]
//

1, 2, 3
=>6


[1,2,3]

[{a: 1}, {b: 2}, {a: 3}]
// 
*/

function sumObjectValues(objects, key){
	let sum =0;
	for(let i =0; i<objects.length; i++){
		console.log([i].hasOwnProperty(key));
		if(objects[i].hasOwnProperty(key)){  //hasOwnProperty 
			console.log(objects[i][key]);
			sum+=objects[i][key];
		}
	}
	return sum;
}
;

console.log(sumObjectValues([{a: 1}, {a: 2}, {a: 3}], "a"));