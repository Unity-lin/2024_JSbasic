//1번 사용자 목록 가져와서 처리하기
//https://jsonplaceholder.typicode.com/users

async function logJSONData() {
	const response = await fetch("http://example.com/movies.json");
	const jsonData = await response.json();
	console.log(jsonData);
}

async function fetchUsers(){
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await response.json();
	
	users.forEach((user)=>{
		console.log(user.name, user.email);
	});
}

//fetchUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(users => users.forEach((user)=>{
// 	console.log(user.name, user.email);}))
// .catch(error => {
// console.error("데이터 못가져옴", error);
// })
// ;
// 왜 a-a 왜 좋은지. then


//2번 특정 id 를 가진 게시물의 제목과 내용을 출력

async function postID(postId){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();
    
	console.log(`Title: ${post.title}`);
	console.log(`Body: ${post.body}`);
}

//postID(10)

//3번 사용자에게 할당된 한 일 목록 가져오기 할당된.. 
// https://jsonplaceholder.typicode.com/todos?userId=1

// 객체 자체를 불러올때 통상적으로 get 패스베이어블을 사용하고, 검색등을 할때 객체 자체아니라 조회는 파라미터를 사용. 

async function fetchTodos(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    const todos = await response.json();

    todos.forEach((todo)=>{
        console.log(`Title ${todo.title}`);
    })
    
}

//fetchTodos(2)

//4번 새로운 게시물 작성하기 


// async function postData(url = "", data = {}) {
// 	// 옵션 기본 값은 *로 강조
// 	const response = await fetch(url, {
// 	  method: "POST", // *GET, POST, PUT, DELETE 등
// 	  mode: "cors", // no-cors, *cors, same-origin
// 	  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
// 	  credentials: "same-origin", // include, *same-origin, omit
// 	  headers: {
// 		"Content-Type": "application/json",
// 		// 'Content-Type': 'application/x-www-form-urlencoded',
// 	  },
// 	  redirect: "follow", // manual, *follow, error
// 	  referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
// 	  body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
// 	});
// 	return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
//   }
  
//   postData("https://example.com/answer", { answer: 42 }).then((data) => {
// 	console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
//   });



async function createPost(){

	const newPost = {
		title: 'New Post', 
		body: 'This is a new post',
		userId: 1
	}

	const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newPost)
	});

	const post = await response.json();

	console.log(post);
}

//createPost();

//5번 특정 사용자의 모든 게시물 가져오기(제목을 출력하는문제)
async function fetchBringUserPost(userId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
	const posts = await response.json();

	posts.forEach((post)=>{
        console.log(`Title ${post.title}`);
    })
}

//fetchBringUserPost(1);

//보강 : users의 이름을 입력하면 그 이름과 posts에있는 userid 와 users에 있는 id 를 대조하여 게시물을 갖고오게해야함

//6번 게시물 수정하기
async function updatePost(postID){

	const updatePost = {
		title: 'Update Post', 
		body: 'This is a update post'
	}

	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		 body: JSON.stringify(updatePost)
	}
);

	const post = await response.json();

	console.log(post);
}

// updatePost(3);

//7번 게시물 삭제하기
async function deletePost(postID){

	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`, {
		method: "DELETE"
	});

	if(response.ok) {
		console.log(`Post ${postID} deleted`);
	}

}

deletePost(1)



//8번 병렬 가져오기

async function fetchMultiplePosts(postId){
	const postIds = [1, 2, 3];

	const promises = postIds.map(id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	.then(res => res.json()));

	const posts = await Promise.all(promises);

	posts.forEach(post =>{
		console.log(`Title: ${post.title}`);
		console.log(`Body: ${post.body}`);
	})
	
}

//fetchMultiplePosts();


// {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false <== 판정이 완료 됨.
//   },

//9번 게시물에 대한 댓글 가져오기
async function fetchBringPostBody(id) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
	const posts = await response.json();

	posts.forEach((post)=>{
        console.log(`UserName ${post.title}`);
		console.log(`body ${post.title}`);
    })
}

//fetchBringPostBody();




//10번 필터링하기 (할일목록 완료)
async function fetchCompletedTodos(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    const todos = await response.json();

	const completedTodos = todos.filter(todos => todos.completed);

    completedTodos.forEach((todo)=>{
        console.log(`Title ${todo.title}`);
    })
    
}

//fetchCompletedTodos(1)


//숙제
// 오늘한거 전체를 브라우저로 출력하기 

// 9. 댓글처리


