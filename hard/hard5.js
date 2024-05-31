//기본(원시) 타입과 참조(객체) 타입의 차이
//원시 타입의 변수는 불변의 성질이어서 재할당을 해야하지만 바뀌고 
//참조 타입의 변수는 가변의 설질이어서 한변수가 바뀌면 다른 변수에서도 변경된 데이터를 확인할 수있음 


// Primitive type (원시 타입)
let a = 28;
let b = a; 
a = 190;

console.log(a); 
console.log(b); 

// Reference type (참조 타입)
let ar1 = [3, 4, 5];
let ar2 = ar1; 

ar1.push(7);

console.log(ar1); 
console.log(ar2);