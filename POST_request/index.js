// //1) basic working of POST
// let options = {
// 	method: "POST",
// 	headers: {
// 		"Content-type":"application/json"
// 	},
// 	body: JSON.stringify({
// 		title:'foo',
// 		body:'bar',
// 		userID:1,
// 	}),
// }


// //could have directly written the options code in the place of options below
// let p1=fetch('https://dummyjson.com/posts/add',options)
// p1.then((response)=>{
// 	return response.json()
// }).then((json)=>{
// 	console.log(json)
// })


//2) same using async and await
const createToDo = async()=>{
	let options = {
		method: "POST",
		headers: {
			"Content-type":"application/json"
		},
		body: JSON.stringify({
			title:'foo',
			body:'bar',
			userId:1,
		}),
	}
	let p1=await fetch('https://dummyjson.com/posts/add',options)
	let response=await p1.json()
	return response
}


const mainFunc = async()=>{
	let todo=await createToDo()
	console.log(todo)
}
mainFunc()