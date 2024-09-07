
// easy 1

const promise = new Promise((resolve, reject)=>{
    const number = 42
    console.log(number);
    resolve(number);
})

//easy 2

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const data = "Data fetched successfully"
        console.log(data);
        resolve(data);

    },2000)
})

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

//easy 4 

function firstPromise(string) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(string);
            }, 1000);
        });
    }

function secondPromise(str) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(str);
            }, 2000);
        });
    }

firstPromise('First').then((string) => {
    console.log(`${string}`)
    return secondPromise('Second')
}).then((str)=>{
    console.log(`${str}`);
});

//easy 5 

const promise5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const data = "Time's up"
        console.log(data);
        resolve(data);

    },3000)
})

//normal 1 //1초 후에 파일 내용을 반환하는 Promise를 만들어서, 파일이 없으면 "File not found" 에러를 반환하기
//normal 2 //숫자를 입력 받아, 그 숫자를 2로 곱한 후 3을 더하고, 그 결과를 10으로 나누는 세 개의 Promise를 체인으로 연결

function plusNum(num){
    return new Promise((resolve, reject)=>{
         num = num + 2;
        resolve(num);
    });
}
function multiplyNum(num){
    return new Promise((resolve, reject)=>{
        num = num * 2;
        resolve(num);
    });
}
function devideNum(num){
    return new Promise((resolve, reject)=>{
        num = num/10;
        resolve(num);
    });
}

plusNum(20).then((num)=>{ return multiplyNum(num)})
.then((num)=>{return devideNum(num)})
.then((num)=>{console.log(`${num}`)})

//normal 3 사용자 데이터를 가져오는 Promise와 그 데이터를 기반으로 사용자 권한을 확인하는 Promise를 만들어서 권한 정보 출력
//normal 4 입력된 비밀번호가 "password123"일 때만 resolve하는 Promise를 만들어서, 비밀번호가 틀리면 "Invalid password" 에러를 출력

const promise9 = new Promise((resolve, reject)=>{
    const pwd = "password123"
    if(pwd === "password123") {
        console.log(Success);
        resolve(pwd);
    } else {
        reject(new Error("Invalid password"));
    }
});
//normal 5 주어진 키를 기반으로 데이터를 가져오는 Promise를 만들어서, 캐시된 데이터가 있는 경우 즉시 반환하고, 없으면 데이터를 가져와 캐시 후 반환

//(노말 해결되면 풀 예정)
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



