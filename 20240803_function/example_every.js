const fruits = [
	{ name: '🍊', price: 300 },
	{ name: '🍌', price: 700 },
	{ name: '🍎', price: 500 },
	{ name: '🍋', price: 1000 }
  ];


  // 과일들은 모두 100원보다 비쌉니까?

  const result = fruits.every( (fruit) => {
        if(fruit.price > 400){
            return true;
        }
        return false;
  })

  console.log(result);

  // 한줄로 표현하기.