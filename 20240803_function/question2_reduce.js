console.log("1번문제");

const numbers = [1,3,3,2,2,2,1,3,2]
const count_reduce = numbers.reduce((acc,cur)=>{ 
	if(cur in acc){
        acc[cur]++;
    }
    else {
        acc[cur] = 1;
    }
    return acc;
}, {})

// 패턴2 확인 해서 돌려보기.
numbers.reduce((acc,cur)=>{ 
  acc[cur] = (acc[cur] || 0)+1
  return acc;
}, {});

// 핵심.
console.log(count_reduce);
console.log(Object.keys(count_reduce));
console.log(count_reduce[2]);

const max  = Object.keys(count_reduce)
        .reduce((acc,cur)=>count_reduce[acc] >  count_reduce[cur] ? acc : cur);

console.log(max); 

//2번째문제
console.log("2번문제");
const arr = [{id:1}, {id:2}, {id:3}, {id:1}]

const result2 = arr.reduce((acc, obj)=>{
  if(!acc.some(item => item.id === obj.id)){
    acc.push(obj);
  }
  return acc;
}, []);

console.log(result2);

// 문제 3: 이진수로 표현된 문자열의 1의 개수 세기
console.log("3번문제");
const arr1 = ['1101', '1010', '1111'];

const onesCount = arr1.reduce((acc, bin) => {
    
  const a = acc + bin.split('')
    .filter(bit => bit === '1')
    .length

    console.log(acc);
    console.log(acc + bin.split(''))

    return a;
}, 0)

  /*acc + bin.split('')
    .filter(bit => bit === '1')
    .length, 0)
;
*/
console.log(onesCount);

// 문제 4: 객체 배열에서 특정 키의 모든 값을 합산하기
console.log("4번문제");
const objects4 = [{ value: 10 }, { value: 20 }, { value: 30 }];

const result4 = objects4.reduce((acc, cur) => {
    return acc + cur.value; 
},0)

console.log(result4);

//문제 5
console.log("5번문제");
const arr5 = ['apple', 'banana', 'cherry'];
const result5 = arr5.reduce((acc, cur) => {
    return acc + cur.length; 
},0)

console.log(result5);

//문제 6
console.log("6번문제");
const arr6 = [1,2,3,4,5,6];
const result6 = arr6.reduce((acc, cur)=>{
  if (cur % 2 === 0) {
    acc.even++;
  } else {
    acc.odd++;
  }
  return acc;
},{even: 0, odd: 0}) 

console.log(result6);

//문제 7
console.log("7번문제");

const words7 = ['hello', 'world'];

words7.join('');

// const result7 = words7.split('').reduce((acc, cur)=>{
//   if(){

//   }
// },{})

const letterFre = words7.join('').split('').reduce((acc,cur)=>{ 
  acc[cur] = (acc[cur] || 0)+1
  return acc;
}, {});

console.log(letterFre);





//문제 8
console.log("8번문제");
const obj8 = [ { name: 'A', price: 30 }, { name: 'B', price: 50 }, { name: 'C', price: 40 } ];
const result8 = obj8.reduce((arr,cur)=>{
  if(cur.price > arr.price){

    arr = cur;
  }

  return arr
},{name: '', price : 0})

console.log(result8);

//문제 9
console.log("9번문제");
const arr9o1 = [1, 2, 3, 4] 
const arr9o2 = [3, 4, 5, 6] 

const result9 = arr9o1.reduce((acc, cur) => {
  if (arr9o2.includes(cur) && !acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(result9); 

//문제 10 : 합집합 구하기
console.log("10번문제");
const arr10o1 = [1, 2, 3, 4, 5, 6] 
const arr10o2 = [3, 4, 5] 

const result10 = arr10o1.concat(arr10o2).reduce((acc,cur)=>{
  if (acc.includes(cur)) {
    return acc 
  } else {
    return [...acc, cur] 
  }
},[]);

const union = arr10o1.concat(arr10o2).reduce((acc,num)=>{
  if(!acc.includes(num)) acc.push(num); 
  return acc;
}, [])

console.log(union);


const arr_1 = [1,2,3]
const newArr1 =[...arr_1, 4];
console.log(newArr1);


console.log(result10); 

//문제 11
console.log("11번문제");

const str11 = 'abbccddeeff'
const result11 = str11.split('').reduce((acc, cur) => acc.includes(cur) ? acc : acc + cur, '')

console.log(result11);

//문제 12 
console.log("12번문제");

const obj12 =  [ 
  { group: 'A', name: 'X' }, 
  { group: 'B', name: 'Y' },
  { group: 'A', name: 'Z' } 
]

const result12 = obj12.reduce((acc, cur) => {
  if(!acc[cur.group]){
    acc[cur.group] = [];
  }
  acc[cur.group].push(cur.name);
  return acc;

}, {})

console.log(result12);

//문제 13
console.log("13번 문제")
const numbers13 = [1, 2, 3, 4, 5];

const result13 = numbers13.reduce((acc, num, inx) => {
  if(inx === 0){
    acc.push(num);
  } else {
    acc.push(acc[inx-1]+num);
  }
  return acc;
}, []);

console.log(result13);

//문제 14 reduce를 두번써야함 
console.log("14번 문제")

const arr14 = [1, 2, 2, 2, 3, 4, 4]

const result14 = arr14.reduce((acc, cur)=>{

},0)

//포기 
//문제 15
console.log("15번 문제")

const arr15 = [[1, 2], [3, 4], [5, 6]];
const result15 = arr15.reduce((acc,cur)=>{
  return acc.concat(cur)
},[])

console.log(result15);

//문제 16
console.log("16번 문제")

const obj16 =  { a: { value: 10 }, b: { value: 20 }, c: { value: 30 } }
const result16 = Object.values(obj16).reduce((acc, cur)=>{
    return acc + cur.value
},0)

console.log(result16);
//문제 17
console.log("17번 문제")

const arr17o1 = [1, 2, 3, 4];
const arr17o2 = [3, 2, 1, 4];

const result17 = arr17o1.reduce((acc, cur, inx)=>{
  if(cur === arr17o2[inx]){
    acc.push("true");
  }
  else{
    acc.push("false");
  }
  return acc;

},[])

console.log(result17);

//문제 18
console.log("18번 문제")

const obj18 = [ { type: 'fruit', name: 'apple' }, 
                { type: 'vegetable', name: 'carrot' }, 
                { type: 'fruit', name: 'banana' } ]

const result18 = obj18.reduce((acc, obj)=>{
    let key = obj.type;
    if(!acc[key]){
      acc[key] = [];
    }
    acc[key].push(obj.name);
    return acc;

},{})

console.log(result18);

//문제 19 : 숫자 배열 [1, 1, 2, 2, 3, 1, 1]에서 값이 변할 때마다 새로운 그룹으로 나누어 [[1, 1], [2, 2], [3], [1, 1]] 형태로 반환
console.log("19번 문제")

const arr19 =  [1, 1, 2, 2, 3, 1, 1];

// const result19 = arr19.reduce((acc, cur, inx)=>{
  
//     const lastGroup = acc[acc.length - 1];
//     if (!lastGroup || lastGroup[lastGroup.length - 1] !== num) {
//       acc.push([num]);
//     } else {
//       lastGroup.push(num);
//   }

//     return acc;

// },[])
// console.log(result19);



const groupedByChange = arr19.reduce((acc, num)=>{
  const lastGroup = acc[acc.length - 1];
  if (!lastGroup || lastGroup[lastGroup.length - 1] !== num) {
    acc.push([num]);
  } else {
    lastGroup.push(num);
  }
  return acc;
}, []);

console.log('문제 19: 값이 변할 때마다 그룹화:', groupedByChange);









//포기

//문제 20
console.log("20번 문제")

const obj20= [ { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 } ]

const result20= obj20.reduce((acc, obj, inx) => {
  if(inx === 0){
    acc.push(obj.value);
  } else {
    acc.push(acc[inx-1]+obj.value);
  }
  return acc;
}, []);

console.log(result20);






const numbers19 = [1, 1, 2, 2, 3, 1, 1];