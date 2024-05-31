//함수 스코프 vs 블록스코프
//함수스코프 : 함수에서 선언한 변수는 해당 함수 내에서만 접근 가능 (var)
//블록스코프 : 블록({})내부에서 선언된 변수는 해당 블록에서만 접근 가능 (let, const)

// 함수 스코프인경우

function ad() {
    for (var a=0; a<16; a++) {
      
    }
    console.log(a)   
  }
  
  ad();  

  //블록 스코프인 경우

  function ap() {
    for (let b=0; b<16; b++) {
      
    }
    console.log(b)   
  }
  
  ap(); 

  //const는 재할당이 불가하여 if문은 제외

  