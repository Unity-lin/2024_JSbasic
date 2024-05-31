//let으로 선언된 변수는 재할당 가능하지만, const는 불가능
//const로 선언된 변수는 전역객체(window, global)의 프로퍼티가 될수 있지만 let은 불가능

let a = 0;
a = 5; 

const b = 20;
//b = 35;

console.log(a);
console.log(b);

//재할당 가능여부 

let c = 16;
console.log(global.c); //undefined

const d = 25;
console.log(global.d); //undefined

//전역객체 프로퍼티 되는여부 