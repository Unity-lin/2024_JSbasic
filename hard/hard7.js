//var로 함수를 선언하면 가장 가까운 함수의 범위에 스코프가 지정된다
//이는 var이 함수스코프를 갖는다는것으로 의미된다

if(true) {
    var a = 22;
    console.log(a); 
}

console.log(a); 


//함수를 제외한 영역에서 var로 선언할시 전역변수로 취급 

function c() {
    var y = 42;
    console.log(y);
}

c();
console.log(y); //ReferenceError: y is not defined

//함수 내부에서 선언된 변수는 지역변수로 취급하여 내부에서만 참조가 가능하며 외부에서 참조가 불가능함

