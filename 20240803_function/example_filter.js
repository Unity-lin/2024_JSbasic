const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.filter((numbers) => numbers % 2 === 0);

console.log(result);


const result2 = numbers.filter((number)=>{
	if(number % 2 === 0){
		return true;
	}
	return false;
}) 

console.log(result2);

const fruits = [
	{ name: '🍊', price: 300 },
	{ name: '🍌', price: 700 },
	{ name: '🍎', price: 500 },
	{ name: '🍋', price: 1000 }
  ];

  //제돈이 500원있는데 이 돈으로 과일을 무엇을 살수있을까요?
  const result3 = fruits.filter((fruit) => {
		if(fruit.price <= 500){
			return true;
		}
		return false;
  })

  const result4 = fruits.filter( fruit => fruit.price <= 500)

  console.log(result3);
  console.log(result4);