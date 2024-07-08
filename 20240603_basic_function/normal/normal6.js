//두번째로 큰숫자 찾기
//조건 : 제일 큰숫자와 겹친숫자는 제외하고 찾아야함
//조건 충족 : 겹친숫자가 없기

//1. [1, 2, 3, 4, 5, 5, 4]; 이 숫자 에 대해서 처리. 두번째로 큰거.
//2.  찾기 위해서 . 전처리. 순서를 새우고. sort
//3. 중복을 재거하고 set
//4. 배열중에 가장 큰수를 구하고 math.max
//5. 가장 큰수의 다음 인덱스 가져와서 출력하면 된다.



function getSecondLargest(nums){
	const a = [...(new Set(nums))];

	a.sort((a,b)=> b-a)

	return a[1];
}


console.log(getSecondLargest([1,2,3,4,5,5,4]));
;



function getSecondLargest2(nums) {
    let largest = -0;
    let secondLargest = -0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] < largest) {
            secondLargest = nums[i];
        }
    }
    
    return secondLargest;
}

// 테스트
const numbers = [1, 2, 3, 4, 5, 5, 4];
console.log(getSecondLargest2(numbers)); // 출력: 4