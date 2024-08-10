const fruits = [
	{ name: '🍊', price: 300 },
	{ name: '🍌', price: 700 },
	{ name: '🍎', price: 500 },
	{ name: '🍋', price: 1000 }
  ];

  // find 로 가격이 500원 인 과일을 찾아라.

  const result = fruits.find((fruit) => {
	if (fruit.price === 500) {
		return true;
	}
	return false;
  })

  console.log(result);

  const result2 =fruits.find(fruit => fruit.price === 500);

  console.log(result2);

  const array = [0, 1, , , , 5, 6];
  
  array.find((value, index) => {
	console.log("방문 인덱스:", index, "값:", value);
  });

  array.find((value) => {
	console.log("방문 값:", value);
  });


  const result3 = fruits.findIndex((fruit, index)=>{
	if (fruit.price === 500) {
		return true;
	}
	return false;
  })

  console.log(result3)