



// const numbers = [1,2,3,4]
// function sum(arr){
//     let result = 0
//     for(let i=0; i < arr.length; i++){
//         result = result + arr[i];
//     }
//     return result;
// }
// console.log(sum(numbers));

// // 10


let total = 0;
// numbers.forEach((num)=>{
// 	total += num;
// });
// console.log(total);

// numbers.map((num)=>{	// map 리턴해야하는데 num 의미가 없음.
// 	total += num;
// 	return 0;
// });

// console.log(total);
const numbers = [1,2,3,4]
const total_reduce = numbers.reduce((acc,cur)=>{
	return acc + cur;
}, 0)

console.log(total_reduce);
;

/**
reduce : 줄이다. 
v a c r 
1 0 1 1
2 1 2 3 
3 3 3 6
4 6 4 10
 */

// 가장 작은 값을 찾아서 출력하라.
const numbers2 = [10, 4, 2, 8];
const min_reduce = numbers2.reduce((acc, cur)=>{
	return acc < cur ? acc : cur;
})

// 삼행연산자.
// 조건 ? 참 : 거짓

console.log(min_reduce)

const cart = [
    { name: '사과', price: 500 },
    { name: '바나나', price: 700 },
    { name: '레몬', price: 300 }
];

// 과일의 금액 합계를 구하라.
const priceSum = cart.reduce((acc, cur)=>{
    return acc + cur.price;
}, 0)

console.log(priceSum)

// sum, min, 
// avg, count, max <= 가격.

const priceAvg = cart.reduce((acc, cur)=>{
    
    return acc + cur.price
}, 0) / cart.length

console.log(priceAvg)


let totalAmount = 0;
cart.forEach(item => {
    totalAmount += item.price;
});

// avg
//1. reduce 를 포함한 별도 함수를 만들어서 처리
//2. reduce 만으로 처리.