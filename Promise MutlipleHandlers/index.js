let p1=new Promise((resolve,reject)=>{
	console.log("I am not resolved yet")
	setTimeout(()=>{
		resolve(24)
	},3000)
})

p1.then((value)=>{
	console.log("Hurray")
	console.log(value)
})

p1.then(()=>{
	console.log("Promise is resolved")
})