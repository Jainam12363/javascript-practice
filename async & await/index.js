// //1) this is basic async example. Here it is running promise. If the keyword async was not there then .then() would show error
// async function Hello(){
// 	return 16
// }
// Hello().then((x)=>{
// 	alert(x)
// })

// //2) Here it will first await to fulfill delhiWeather. After delhiWeather promise is fulfilled then it goes to BangloreWeather. This is how await works.
// async function Hello(){
// 	let delhiWeather=new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			resolve("27 deg")
// 		},2000)
// 	})
// 	let bangloreWeather=new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			resolve("21 deg")
// 		},3000)
// 	})

// 	// delhiWeather.then(alert)
// 	// bangloreWeather.then(alert)

// 	let delhiW= await delhiWeather
// 	let bangloreW= await bangloreWeather
// 	return [delhiW,bangloreW]
// }

// console.log("Welcome to weather control room")
// let a= Hello()
// console.log(a)

// //3) This shows how await works. First delhiWeather is executed then bangaloreWeather
// async function Hello(){
// 	let delhiWeather=new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			resolve("27 deg")
// 		},2000)
// 	})
// 	let bangloreWeather=new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			resolve("21 deg")
// 		},5000)
// 	})
// 	console.log("Fetching Delhi weather pls wait..")
// 	let delhiW= await delhiWeather
// 	console.log("Fetched Delhi weather: "+delhiW)

// 	console.log("Fetching Banglore weather pls wait..")
// 	let bangloreW= await bangloreWeather
// 	console.log("Fetched Banglore weather: "+bangloreW)

// 	return [delhiW,bangloreW]
// }

// console.log("Welcome to weather control room")
// let a= Hello()
// a.then((value)=>{
// 	console.log(value)
// })

//4)Different async functions execute parallely.
async function Hello(){
	let delhiWeather=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("27 deg")
		},2000)
	})
	let bangloreWeather=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("21 deg")
		},5000)
	})
	console.log("Fetching Delhi weather pls wait..")
	let delhiW= await delhiWeather
	console.log("Fetched Delhi weather: "+delhiW)

	console.log("Fetching Banglore weather pls wait..")
	let bangloreW= await bangloreWeather
	console.log("Fetched Banglore weather: "+bangloreW)

	return [delhiW,bangloreW]
}

const cherry=async ()=>{
	console.log("Hey I am cherry")
}

const main1 = async()=>{
	console.log("Welcome to weather control room")
	let a=await Hello()
	let b=await cherry()
	
}

main1()
