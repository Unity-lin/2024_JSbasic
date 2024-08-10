const fruits = [
	{ name: '🍊', price: 300 },
	{ name: '🍌', price: 700 },
	{ name: '🍎', price: 500 },
	{ name: '🍋', price: 1000 }
  ];

  // 600원 보다 큰 가격에 과일이 있나요?

  const result = fruits.some((fruit) => {
        if(fruit.price > 6000){
            return true;
        }
        return false;
  })

  //한줄로 만들기
  

  console.log(result);

