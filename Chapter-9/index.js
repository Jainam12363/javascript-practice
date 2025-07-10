//1)
// const loadScript = async (src) =>{
// 	return new Promise((resolve,reject)=>{
// 		let script=document.createElement("script")
// 		script.src=src
// 		script.onload=()=>{
// 			resolve(src + "SUceesss")
// 		}
// 		document.head.append(script)
// 	})
// }

// let a=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
// 	console.log(value)
// })

//2)
// const loadScript = async (src) =>{
// 	return new Promise((resolve,reject)=>{
// 		let script=document.createElement("script")
// 		script.src=src
// 		script.onload=()=>{
// 			resolve(src + "SUceesss")
// 		}
// 		document.head.append(script)
// 	})
// }

// const main1= async ()=>{
// 	console.log(new Date().getMilliseconds())
// 	let a =await  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")
// 	console.log(a)
// 	console.log(new Date().getMilliseconds())
// }
// main1()


//3)
// let p= ()=>{
// 	return new Promise((resolve,reject)=>{
		
// 		setTimeout(()=>{
				
// 			reject(new Error("BYE BYE"))
			
// 		},3000)
		
		
		
		
// 	})
// }

// let a= async ()=>{
// 	try{
// 		let c= await p()
// 		console.log(c)

// 	}
// 	catch(err){
// 		console.log("This error has been handled"+err)
// 	}
// }
// a()



//4)
let p1= async()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(10)
		},2000)
	})
}

let p2= async()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(20)
		},1000)
	})
}

let p3= async()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(30)
		},3000)
	})
}

const run = async ()=>{

	// //This took run: 6023.151123046875 ms to run
	// console.time("run")
	// let a1=await p1()
	// let a2=await p2()
	// let a3=await p3()
	// console.log(a1,a2,a3)
	// console.timeEnd("run")

	//this takes around run: 3014.569091796875 ms to run
	console.time("run")
	let a1=p1()
	let a2=p2()
	let a3=p3()

	let a1a2a3= await Promise.all([a1,a2,a3])
	console.log(a1a2a3)
	console.timeEnd("run")
}
run()