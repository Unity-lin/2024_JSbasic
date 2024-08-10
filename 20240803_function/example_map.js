const fruits = [
	{ name: '🍊', price: 300 },
	{ name: '🍌', price: 700 },
	{ name: '🍎', price: 500 },
	{ name: '🍋', price: 1000 }
  ];
  

  // price 에 가격 단위가 없는데 가격단위인 원 월 붙여서 새로운 배열을 만드세요.'🍊' : 300 원


  const result = fruits.map((fruit)=>{
	// fruit => { name: '🍊', price: 300 },
	// fruit => '🍊' : 300 원
	return `${fruit.name} : ${fruit.price}원` 
    }
  )


 console.log(result);

 //filter와 map을 사용하여 600원 이상인 과일의 대해서 과일이름과 과일가격을 출력하는 프로그램을 작성하세요 

 //gitbook. md markdown