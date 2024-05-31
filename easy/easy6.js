//let과 var의 차이 : let은 중복에서 선언과 초기화를 할 수 없고 var은 중복에서 같은변수와 초기화를 선언할 수 있다

let a = 0;
var b = 5;

console.log(a);
console.log(b);

var b = 15;
//let a = 5;        //에러가 나는 모습

console.log(a);
console.log(b);