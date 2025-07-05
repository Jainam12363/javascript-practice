//1)
// let p=new Promise((resolve,reject)=>{
// 	console.log("Promise is pending")
// 	setTimeout(()=>{
// 		console.log("I am promise and I am fulfilled")
// 		resolve(true)
// 	},5000)
// })

// //this will be pending yet when this pgm is runned till 5 seconds
// console.log(p) 


//2)
// //here it will be reject not resolved
// let p=new Promise((resolve,reject)=>{
// 	console.log("Promise is pending")
// 	setTimeout(()=>{
// 		console.log("I am promise and I am rejected")
// 		reject(new Error("I am an error"))
// 	},5000)
// })

// //this will be pending yet when this pgm is runned till 5 seconds
// console.log(p) 


//3)
// //both p1 and p2 will be executed parallely
// let p1=new Promise((resolve,reject)=>{
// 	console.log("Promise is pending")
// 	setTimeout(()=>{
// 		console.log("I am promise and I am resolved")
// 		resolve(true)
// 	},5000)
// })

// let p2=new Promise((resolve,reject)=>{
// 	console.log("Promise is pending")
// 	setTimeout(()=>{
// 		console.log("I am promise and I am rejected")
// 		reject(new Error("I am an error"))
// 	},5000)
// })

// //for this reason promises are used. if there are 50 promises then all will be executed in parallel and user will be notified. notifying step is below.
// //this will be pending yet when this pgm is runned till 5 seconds
// console.log(p1,p2) 


//4)
// //using .then and .catch
// let p1=new Promise((resolve,reject)=>{
// 	console.log("Promise is pending")
// 	setTimeout(()=>{
// 		// console.log("I am promise and I am resolved")
// 		resolve(true)
// 	},5000)
// })

// let p2=new Promise((resolve,reject)=>{
// 	console.log("Promise is pending")
// 	setTimeout(()=>{
// 		// console.log("I am promise and I am rejected")
// 		reject(new Error("I am an error"))
// 	},5000)
// })

// p1.then((value)=>{
// 	console.log(value)
// })
// p2.catch((error)=>{
// 	console.log("some error occured in p2")
// })


//5)
//we can use null as first argument and then pass error handling in second argument 
//using .then and .catch
let p1=new Promise((resolve,reject)=>{
	console.log("Promise is pending")
	setTimeout(()=>{
		// console.log("I am promise and I am resolved")
		resolve(true)
	},5000)
})

let p2=new Promise((resolve,reject)=>{
	console.log("Promise is pending")
	setTimeout(()=>{
		// console.log("I am promise and I am rejected")
		reject(new Error("I am an error"))
	},5000)
})

p1.then((value)=>{
	console.log(value)
})

// p2.catch((error)=>{
// 	console.log("some error occured in p2")
// })

//or 

//here we wont be able to see error as they will be printed normally in console, so we have to use .catch wherever we feel that it will generate an error
p2.then((value)=>{
	console.log(value)
},(error)=>{
	console.log(error)
})




//6)
// let promise=new Promise(resolve=>{
// 	setTimeout(()=>resolve("Done"),1000)
// });
// promise.then(alert);