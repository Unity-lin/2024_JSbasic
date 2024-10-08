
// easy 1

const promise = new Promise((resolve, reject)=>{
    const number = 42
    console.log(number);
    resolve(number);
})

const sp = new Promise((resolve)=>{
    resolve(42)
});

sp.then((value)=>{
    console.log(value);
})
;


//easy 2

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const data = "Data fetched successfully"
        console.log(data);
        resolve(data);

    },2000)
})

const sp2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Data fetched successfully")
    },2000)
})

sp2.then((strings)=>{
    console.log(strings);
});



//easy 3

const promise3 = new Promise((resolve, reject)=>{
		const numbers = 4
		if(numbers < 5) {
			console.log(numbers);
			resolve(numbers);
		} else {
			reject(new Error("Input too large"));
		}
});


// E3. 숫자 5보다 큰 값이 입력되면 "Input too large" 에러를 반환하는 Promise를 만들어서, 에러 메시지 출력하기.
const checkInputSize = (num) => {
    return new Promise((resolve, reject)=>{
		if(num < 5) {
			console.log(`E3 result is ${num}`);
			resolve(num);
		} else {
			reject(("Input too large"));
		}
    });
}


checkInputSize(4).catch((err)=>{
    console.log(err);
})



//E4 첫 번째 Promise는 1초 후에 "First", 두 번째 Promise는 2초 후에 "Second"를 반환하게 해서, 두 결과를 함께 출력하기.

const firstPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('First');
            }, 1000);
        });

const secondPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('Second');
            }, 2000);
        });

Promise.all([firstPromise,secondPromise]).then((values)=>{
    console.log(`E4 result is ${values}`)
});



//easy 5 

const promise5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const data = "Time's up"
        console.log(data);
        resolve(data);

    },3000)
})

const sp5 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Time's up")
    },3000)
})

sp5.then((strings)=>{
    console.log(strings);
});

//normal 1 //1초 후에 파일 내용을 반환하는 Promise를 만들어서, 파일이 없으면 "File not found" 에러를 반환하기

// 참고!!!! 

// setTimeout(()=>{
//     if(fileName === 'file.txt'){
//         resolve('File content');
//     }else{
//         reject('File not found');
//     }
// }, 1000);
const no1 = (fileName) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(fileName === 'file.txt'){
                resolve('File content');
            }else{
                reject('File not found');
            }
    },1000);
    });
}

no1('file.jpg').catch((err)=>{
    console.log(err)
})
//normal 2 //숫자를 입력 받아, 그 숫자를 2로 곱한 후 3을 더하고, 그 결과를 10으로 나누는 세 개의 Promise를 체인으로 연결


const multiplyBy2 = (num) => Promise.resolve(num * 2);
const add3 = (num) => Promise.resolve(num + 3);
const divideBy10 = (num) => Promise.resolve(num/10);

multiplyBy2(5)
.then(add3)
.then(divideBy10)
.then(result => console.log(`${result}`));

//normal 3 사용자 데이터를 가져오는 Promise와 그 데이터를 기반으로 사용자 권한을 확인하는 Promise를 만들어서 권한 정보 출력


const getUserData = () => Promise.resolve({id:2, name: 'John'});
const checkUserPermission = (user) => user.id === 1 ? Promise.resolve('Admin'): Promise.resolve("User") 


getUserData()
.then(checkUserPermission)
.then(resolve => console.log(`${resolve}`));


//normal 4 입력된 비밀번호가 "password123"일 때만 resolve하는 Promise를 만들어서, 비밀번호가 틀리면 "Invalid password" 에러를 출력

const promise9 = new Promise((resolve, reject)=>{
    const pwd = "password123"
    if(pwd === "password123") {
        console.log("Success");
        resolve(pwd);
    } else {
        reject(new Error("Invalid password"));
    }
});

const no4 = (pwd) =>{
    return new Promise((resolve, reject)=>{
        if(pwd === "password123") {
            console.log("Success");
            resolve(pwd);
        } else {
            reject(new Error("Invalid password"));
        }
    });
}

no4("password123").catch((err)=>{
    console.log(err)
})




//normal 5 주어진 키를 기반으로 데이터를 가져오는 Promise를 만들어서, 캐시된 데이터가 있는 경우 즉시 반환하고, 없으면 데이터를 가져와 캐시 후 반환

const keyData = (num) => Promise.resolve({key:4, data: 'XQW24'},num);
const bringData = (securitydata) => securitydata.key === num ? Promise.resolve(securitydata) : Promise.resolve("data cashing")

keyData(4).then(bringData).then( resolve => console.log(`${resolve}`))

//(노말 해결되면 풀 예정) 9/20 찜질방에서 (아직도 노말 5번이 해결안됨) / 현재 9/22 num이 디파인드라고뜸 
//hard 1
//hard 2
//hard 3
//hard 4
//hard 5
//hard 6
//hard 7
//hard 8
//hard 9
//hard 10



