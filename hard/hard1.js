// 변수 호이스팅이란?
// JavaScript는 코드를 실행하기 전, 일종의 코드 평가 과정을 거치는데, 
// 이때 “변수 선언문”을 미리 실행두기 때문에 뒤에서 선언된 변수도 앞의 코드에서 참조할 수 있게하는 것
// var로 예시를 들겠다

console.log(hoisting);  

var hoisting = 195;

console.log(hoisting);  