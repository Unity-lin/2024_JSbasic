

//미국에서 날짜를 가져오는데는 2초가 걸린다.

/*function getDate(call){
	setTimeout(()=>{
		console.log("1. 날짜 가져오기");
		call();
	}, 2000)
}

getDate(()=>{
	console.log("2. 후처리");
});


*/
// 로그인을 한다. ⇒ 장바구니에 물품을 넣는다. ⇒ 결제를 한다. 에 대한 프로그램 작성

//console.log('로그인을한다.')
//console.log('장바구니에 물품을 넣는다.')
//console.log('결제를 한다.')


function login(username, callback){
	// 로그인을 하는데는 4초 걸리고 사용지 이름을 출력한다.
	setTimeout(()=>{
		console.log(`${username}님이 로그인했습니다.`);
		callback(username);
	}, 4000)
	
}
function addCart(item, callback){
	// 장바구니에 감자가 담겼습니다. 2초. 

	setTimeout(() => {
		console.log(`${item}을 장바구니에 담았습니다.`);
		callback(item);
	},2000)
}
function makePayment(item, cardNumber,callback){
	// 결제를 하는건 1초걸려요.
	setTimeout(()=>{
		callback(item, cardNumber);
	},1000)
}

// function loginItemPayment(userName, item, cardNumber) {
//     login(userName, () => {
//         addCart(item, () => {
//             makePayment(cardNumber, () => {
//                 console.log(`${item}이 ${cardNumber}로 결제되었습니다.`)
//             });
//         });
//     });
// }

// loginItemPayment("최소정", "감자", "6787-5375-9713-3876");

login('최소정', (username)=>{
	addCart('감자', (item)=>{
		makePayment('6787-5375-9713-3876', item, (cardNumber, product)=>{
			console.log(`${product} 상품이 ${cardNumber} 로 결제되었습니다.`);
		});
	})
});
