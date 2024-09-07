


const promise = new Promise((resolve, reject)=>{
	console.log('executer');
});



const promise2 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		const date = {name : 'Mina'}
		console.log('Success');
	}, 1000)
});


const promise3 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		const date = {name : 'Mina'}
		console.log('Success');
		resolve(date);
	}, 1000)
});

setTimeout(()=>{
	console.log('promise3 '+promise3)
}, 2000)

;

const promise4 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		const data = {name : 'Mina'}
		if(data) {
			console.log('Successfully Network request');
			resolve(data);
		} else {
			reject(new Error(`Network request failed`));
		}
	}, 1000);
})

setTimeout(()=>{
	console.log('promise4: '+ promise4)
}, 2000);


function login(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(username);
        }, 4000);
    });
}

// 로그인 사용 예
// login('Mike').then((username) => {
//     console.log(`${username} 님이 로그인 했습니다.`);
// });

// 2. 장바구니에 담기
function addCart(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item);
        }, 2000);
    });
}

// addCart('감자').then((item)=>{
//     console.log(`${item} 가 담겼습니다`);
// });

// 3. 결제하기
function makePayment(cardNumber, product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ cardNumber, product });
        }, 1000);
    });
}

// makePayment('1234-5678-9012-3456', '감자').then(({cardNumber, product})=>{
//     console.log(`${product} 가 ${cardNumber}으로 결제되었습니다`)
// })
;



// login('Mike').then((username) => {
//     console.log(`${username} 님이 로그인 했습니다.`);
// 	return addCart('감자')
// }).then((item)=>{
//     console.log(`${item} 가 담겼습니다`);
// 	return makePayment('1234-1234-1234-1234', item);
// }).then(({cardNumber, product})=>{
//     console.log(`${product} 가 ${cardNumber}으로 결제되었습니다`)
// });


async function processOrder() {
	try{
		const username = await login('Mike');
		console.log(`${username} 님이 로그인 했습니다.`);

		const item = await addCart('감자');
		console.log(`${item} 을 장바구니에 넣었습니다.`);

		const { cardNumber, product }=  await makePayment('1234-1234-1234-1234', item)
		console.log(`${product} 상품이 ${cardNumber} 로 결제되었습니다.`);

	} catch(err){
		console.error('오류 발생:', err);
	}
}

processOrder();