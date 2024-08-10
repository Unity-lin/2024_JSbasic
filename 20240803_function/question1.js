const num1 = [5, 10, 15, 20, 25]
const result = num1.every( num1 => num1%5===0)
console.log(result);


const num2 = [2, 4, 6, 8, 10]
const result1 = num2.every( num2 => num2%2===0)
console.log(result1);

const str1 = ["apple", "banana", "cherry"]
const result2 = str1.every( str1 => str1.length >= 5)
console.log(result2);

const num3 = [1, 3, 5, 7, 9]
const result3 = num3.every( num3 => num3%2===1)
console.log(result3);

const ages = [
	{ age: 25},
	{ age: 30},
    { age: 35}
  ];
  const result4 = ages.every( ages => ages.age >= 20)
  console.log(result4);


  //filter

  const n = [1,2,3,4,5,6,7,8,9,10]
  const re = n.filter( n => n%2===0)
  console.log(re);


  const s = ["apple", "banana", "cherry", "date"]
  const re1 = s.filter( s => s.length >= 5)
  console.log(re1);


  const human = [
	{name: "John" , age: 25},
	{name: "Jane" , age: 20},
    {name: "Jim" , age: 30}
  ];
  const re2 = human.filter( human => human.age >= 25)
  console.log(re2);


  const n1 = [12,5,8,130,44]
  const re3 = n1.filter( n1 => n1>10)
  console.log(re3);

  const s1 = ["true", "false", "true", "false", "true"]
  const re4 = s1.filter( s1 => s1=== "true")
  console.log(re4);

  //find

  const findN = [12,5,8,130,44]
  const findR = findN.find( findN => findN>10)
  console.log(findR);


  const findS = ["apple", "banana", "cherry", "date"]
  const findR1 = findS.find( findS => findS.substring(0,1) === "b")
  console.log(findR1);


  const human1 = [
	{id:1, name: "John" , age: 25},
	{id:2, name: "Jane" , age: 20},
    {id:3, name: "Jim" , age: 30}
  ];
  const findR2 = human1.find( human1 => human1.id === 2)
  console.log(findR2);


  const findN1 = [4,6,7,8,10]
  const findR3 = findN1.find( findN1 => findN1%2!==0)
  console.log(findR3);

  const findS1 = ["true", "false", "true", "false", "true"]
  const findR4 = findS1.find( findS1 => findS1=== "false")
  console.log(findR4);

  //map

  const x = [1,2,3,4,5]
  const y = x.map( x => x * 2)
  console.log(y)

  //패스 : 문자열 앞글자 대문자로 변환

  const y1 = human.map(human => `${human.name} : ${human.age + 1}`)
  console.log(y1)

  const x2 = [10,20,30,40,50]
  const y2 = x2.map( x2=> x2 / 2)
  console.log(y2)

  //패스 : 트루 펄스 각 값을 반대로 변환

  //some

  const some1 = [1,2,3,4,5]
  const someR = some1.some(some1 => some1 %2===0)
  console.log(someR)

  const some2 = ["apple", "banana", "cherry"]
  const someR1 = some2.some(some2 => some2.includes("a"))
  console.log(someR1)

  const someR2 = ages.some(ages => ages.age >= 25)
  console.log(someR2)

  const some3 = [1,3,5,7,9]
  const someR3 = some3.some(some3 => some3 %5==0)
  console.log(someR3)

  const some4 = ["true", "false", "true", "false", "true"]
  const someR4 = some4.some(some4 => some4==="true")
  console.log(someR4)